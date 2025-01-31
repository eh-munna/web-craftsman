{
  // Union and Intersection Types

  type User = 'admin' | 'user';

  const user: User = 'user';
  const admin: User = 'admin';

  type Editor = { editor: 'editor' };

  type Moderator = {
    role: User;
  };

  type EditorModerator = Editor & Moderator;

  const moderator: EditorModerator = {
    role: 'user',
    editor: 'editor',
  };
}
