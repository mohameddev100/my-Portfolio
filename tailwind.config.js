module.exports = {
    content: ["./*.html"],
    extends: ["stylelint-config-standard"],
    plugins: ["stylelint-tailwindcss"],
    rules: {
        "at-rule-no-unknown": null, // Disable unknown at-rule warnings
        "tailwindcss/no-custom-classname": false, // Allow custom classes
    },
};
