import os
import zipfile
import filecmp
import shutil
from pathlib import Path
from difflib import unified_diff

# --- CONFIGURATION ---
ZIP_FILE_PATH = "C:\\Users\\RajaS\\backup_learninghub\\project-bolt-sb1-x4srrmj7_malathi_changes_v1.zip"
GIT_PROJECT_DIR = "C:\\Users\\RajaS\\learninghub_1"
TEMP_UNZIP_DIR = "tmp_unzipped"
AUTO_COPY = True  # Set to True to overwrite changed files into Git project

# --- CLEAN TEMP DIR ---
if os.path.exists(TEMP_UNZIP_DIR):
    shutil.rmtree(TEMP_UNZIP_DIR)
os.makedirs(TEMP_UNZIP_DIR)

# --- UNZIP ---
with zipfile.ZipFile(ZIP_FILE_PATH, 'r') as zip_ref:
    zip_ref.extractall(TEMP_UNZIP_DIR)

# --- HANDLE TOP-LEVEL FOLDER IN ZIP ---
top_level_items = os.listdir(TEMP_UNZIP_DIR)
if len(top_level_items) == 1:
    top_item_path = os.path.join(TEMP_UNZIP_DIR, top_level_items[0])
    if os.path.isdir(top_item_path):
        TEMP_UNZIP_DIR = top_item_path  # adjust to the actual project root inside zip

# --- WALK & COMPARE ---
def compare_dirs(zip_dir, git_dir):
    diff_files = []
    new_files = []
    deleted_files = []

    for root, _, files in os.walk(zip_dir):
        for file in files:
            rel_path = os.path.relpath(os.path.join(root, file), zip_dir)
            if ".git" in rel_path.split(os.sep):
                continue
            git_file = os.path.join(git_dir, rel_path)
            zip_file = os.path.join(zip_dir, rel_path)

            if not os.path.exists(git_file):
                new_files.append(rel_path)
                continue

            if not filecmp.cmp(zip_file, git_file, shallow=False):
                diff_files.append(rel_path)

    for root, _, files in os.walk(git_dir):
        for file in files:
            rel_path = os.path.relpath(os.path.join(root, file), git_dir)
            if ".git" in rel_path.split(os.sep):
                continue
            zip_file = os.path.join(zip_dir, rel_path)
            if not os.path.exists(zip_file):
                deleted_files.append(rel_path)

    return diff_files, new_files, deleted_files

modified, new, deleted = compare_dirs(TEMP_UNZIP_DIR, GIT_PROJECT_DIR)

# --- DISPLAY CHANGES ---
print("\nModified files:")
print("\n".join(modified) if modified else "None")

print("\nNew files:")
print("\n".join(new) if new else "None")

print("\nDeleted files:")
print("\n".join(deleted) if deleted else "None")

# --- COPY OPTION ---
if AUTO_COPY:
    for rel_path in modified + new:
        src = os.path.join(TEMP_UNZIP_DIR, rel_path)
        dst = os.path.join(GIT_PROJECT_DIR, rel_path)
        os.makedirs(os.path.dirname(dst), exist_ok=True)
        shutil.copy2(src, dst)
    print("\n✔️ Changed and new files copied into your Git project.")

# --- OPTIONAL: SHOW DIFF FOR TEXT FILES ---
print("\nExample Diff (first modified file):")
if modified:
    rel = modified[0]
    with open(os.path.join(GIT_PROJECT_DIR, rel), 'r') as old_f, \
         open(os.path.join(TEMP_UNZIP_DIR, rel), 'r') as new_f:
        old_lines = old_f.readlines()
        new_lines = new_f.readlines()
        diff = unified_diff(old_lines, new_lines, fromfile='old', tofile='new')
        print("".join(list(diff)[:1000]))  # limit output
