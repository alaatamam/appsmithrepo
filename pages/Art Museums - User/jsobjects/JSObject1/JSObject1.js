export default {
    myVar1: [],
    myVar2: {},
    fetchAllUsers: async () => {
        try {
            const response = await fetch('web:4000/user/user');
            const users = await response.json();
            return users;
        } catch (error) {
            console.error('Failed to fetch users:', error);
            return [];
        }
    },
    getTotalUserBudget: async () => {
        const users = await this.fetchAllUsers();
        const totalBudget = users.reduce((sum, user) => sum + (parseFloat(user.Budget) || 0), 0);
        return totalBudget;
    },
    searchUser: async (searchText) => {
        try {
            const response = await fetch(`https://your-api-url/users?search=${encodeURIComponent(searchText)}`);
            const filteredUsers = await response.json();
            return filteredUsers;
        } catch (error) {
            console.error('Failed to search users:', error);
            return [];
        }
    }
}
