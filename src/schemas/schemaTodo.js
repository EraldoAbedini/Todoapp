const getUSERSopts = {
    schema: {
        response: {
            200: {
                type: 'array',
                users: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        first_name: { type: 'string' },
                        last_name: { type: 'string' },
                        email: { type: 'string' }
                    }
                }
            }
        }
    }
};

const getUsersID = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    id: { type: 'string' },
                    first_name: { type: 'string' },
                    last_name: { type: 'string' },
                    email: { type: 'string' }
                }
            }
        }
    }
};

const postUser = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    id: { type: 'string' },
                    first_name: { type: 'string' },
                    last_name: { type: 'string' },
                    email: { type: 'string' }
                }
            }
        }
    }
};

const deleteUser = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    message: { type: 'string' }
                }
            }
        }
    }
};


const updateUser = {
    schema: {
        body: {
            type: 'object',
            required: ['email'],
            properties: { email: { type: 'string' } }
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    email: { type: 'string' }
                }
            }
        }
    }
}



module.exports = { getUSERSopts, getUsersID, postUser, deleteUser, updateUser };