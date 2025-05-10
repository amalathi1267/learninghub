import os
import requests
from PIL import Image
from io import BytesIO

# Image URLs for each course category
IMAGE_URLS = {
    'selenium': {
        'core_java': 'https://www.oracle.com/a/ocom/img/cb71-java-logo.png',
        'manual_testing': 'https://www.guru99.com/images/1/011819_0805_ManualTesti1.png',
        'automation_testing': 'https://www.selenium.dev/images/selenium_logo_square_green.png',
        'database': 'https://www.mysql.com/common/logos/logo-mysql-170x115.png'
    },
    'python': {
        'basics': 'https://www.python.org/static/img/python-logo.png',
        'web_development': 'https://www.djangoproject.com/s/img/logos/django-logo-negative.png',
        'data_science': 'https://pandas.pydata.org/static/img/pandas_mark.png',
        'automation_testing': 'https://selenium-python.readthedocs.io/_static/logo.png'
    },
    'cloud_computing': {
        'aws': 'https://a0.awsstatic.com/libra-css/images/site/fav/favicon.ico',
        'azure': 'https://azure.microsoft.com/static/images/azure-logo.png',
        'google_cloud': 'https://cloud.google.com/images/brand-guidelines/google-cloud-logo.png',
        'devops': 'https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png'
    },
    'aws': {
        'cloud_practitioner': 'https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png',
        'architect': 'https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png',
        'developer': 'https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Developer-Associate_badge.5c083fa855fe82c1cf2d0c8d883ebbf93f180d58.png',
        'devops': 'https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-DevOps-Engineer-Professional_badge.5c083fa855fe82c1cf2d0c8d883ebbf93f180d58.png'
    },
    'java': {
        'java_se': 'https://www.oracle.com/a/ocom/img/cb71-java-logo.png',
        'android': 'https://developer.android.com/static/images/android_logo.png',
        'programming': 'https://www.oracle.com/a/ocom/img/cb71-java-logo.png',
        'selenium_java': 'https://www.selenium.dev/images/selenium_logo_square_green.png'
    },
    'dotnet': {
        'asp_net': 'https://dotnet.microsoft.com/static/images/redesign/social/dotnet-social.png',
        'web_services': 'https://dotnet.microsoft.com/static/images/redesign/social/dotnet-social.png',
        'visual_basic': 'https://dotnet.microsoft.com/static/images/redesign/social/dotnet-social.png',
        'design_patterns': 'https://dotnet.microsoft.com/static/images/redesign/social/dotnet-social.png'
    }
}

def download_and_resize_image(url, save_path, size=(800, 600)):
    try:
        response = requests.get(url)
        if response.status_code == 200:
            img = Image.open(BytesIO(response.content))
            img = img.convert('RGB')
            img = img.resize(size, Image.Resampling.LANCZOS)
            img.save(save_path, 'PNG', quality=95)
            print(f"Successfully downloaded and processed: {save_path}")
        else:
            print(f"Failed to download image from {url}")
    except Exception as e:
        print(f"Error processing {url}: {str(e)}")

def main():
    base_dir = "project/public/images"
    
    # Create directories if they don't exist
    for category in IMAGE_URLS.keys():
        os.makedirs(os.path.join(base_dir, category), exist_ok=True)
    
    # Download and process images
    for category, images in IMAGE_URLS.items():
        for image_name, url in images.items():
            save_path = os.path.join(base_dir, category, f"{category}-{image_name}.png")
            download_and_resize_image(url, save_path)

if __name__ == "__main__":
    main() 