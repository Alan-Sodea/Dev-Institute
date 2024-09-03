// switchStatement.ts
function getAction(role: string): string {
    switch (role) {
        case "admin":
            return "Admin dashboard";
        case "editor":
            return "Edit content";
        case "viewer":
            return "View content";
        default:
            return "No action available";
    }
}

console.log(getAction("admin"));  // Admin dashboard
console.log(getAction("viewer")); // View content
