export const fbConfig = {
	apiKey: '',
	authDomain: '',
	databaseURL: '',
	projectId: '',
	storageBucket: '',
	messagingSenderId: '',
	appId: '',
}

export const rfConfig = {
	userProfile: 'users', // root that user profiles are written to
	useFirestoreForProfile: true, // Save profile to Firestore instead of Real Time Database
	useFirestoreForStorageMeta: true, // Metadata associated with storage file uploads goes to Firestore
}
