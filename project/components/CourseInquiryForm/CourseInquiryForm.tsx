import styles from './CourseInquiryForm.module.css';

return (
  <div className={styles.popupWrapper}>
    <div className={styles.formBox}>
      <h2 className="text-2xl font-bold mb-6 text-center">📩 Course Inquiry</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* form fields go here */}
      </form>

      {/* Close button */}
      <button
        onClick={closeForm}
        className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold"
      >
        &times;
      </button>
    </div>
  </div>
);
