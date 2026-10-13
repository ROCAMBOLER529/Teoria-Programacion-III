interface DraftInterface {
    title: string
};

interface DraftInterface {
    isPublished: boolean
};

const d: DraftInterface = {title: 'x', isPublished: false};

// type DraftType = { ==> "Duplicate identifier 'DraftType'"
//     title: string
// };

// type DraftType = { ==> "Duplicate identifier 'DraftType'"
//     isPublished: boolean
// };