import { defineMessages } from 'react-intl';

export default defineMessages({
  joinedTeam: {
    id: 'access.shareWithMe.joinedTeam',
    defaultMessage: 'Joined Team',
  },
  sharedAdAccount: {
    id: 'access.shareWithMe.sharedAdAccount',
    defaultMessage: 'Shared Ad Account',
  },
  sharedMember: {
    id: 'access.shareWithMe.sharedMember',
    defaultMessage: 'Shared Member',
  },
  searchUserName: {
    id: 'access.shareWithMe.joinedTeam.searchUserName',
    defaultMessage: 'by user name',
  },
  searchAdAccountName: {
    id: 'access.shareWithMe.searchAdAccountName',
    defaultMessage: 'by ad account name',
  },
  loadMore: {
    id: 'access.shareWithMe.loadMore',
    defaultMessage: 'Load more',
  },
  leaveTeam: {
    id: 'access.shareWithMe.leaveTeam',
    defaultMessage: 'Leave team',
  },
  nodata: {
    id: 'access.shareWithMe.nodata',
    defaultMessage: 'No data found',
  },
  invite_member: {
    id: 'access.shareWithMe.invite_member',
    defaultMessage: 'Invite members',
  },
  add_member: {
    id: 'access.shareWithMe.add_member',
    defaultMessage: 'Add members',
  },
  revoke: {
    id: 'access.shareWithMe.revoke',
    defaultMessage: 'Revoke',
  },

  downgraded: {
    id: 'access.shareWithMe.downgraded',
    defaultMessage: 'Your owner has been downgraded plan. Please contact the owner to continue using.',
  },

  yourself: {
    id: 'access.shareWithMe.yourSelf',
    defaultMessage: 'you',
  },

  /** Column table */
  column_members: {
    id: 'access.shareWithMe.column_members',
    defaultMessage: 'Members',
  },
  column_signed_in: {
    id: 'access.shareWithMe.column_signed_in',
    defaultMessage: 'Last signed in',
  },
  column_access: {
    id: 'access.shareWithMe.column_access',
    defaultMessage: 'Access',
  },
  column_inviter: {
    id: 'access.shareWithMe.column_inviter',
    defaultMessage: 'Inviter',
  },
  column_added_on: {
    id: 'access.shareWithMe.column_added_on',
    defaultMessage: 'Added on',
  },

  /** Role */
  role_manager: {
    id: 'access.shareWithMe.role_manager',
    defaultMessage: 'Manager',
  },
  role_member: {
    id: 'access.shareWithMe.role_member',
    defaultMessage: 'Member',
  },
  role_non_team_member: {
    id: 'access.shareWithMe.role_non_team_member',
    defaultMessage: 'Viewer',
  },
  /** Column table */
  column_channel: {
    id: 'access.shareWithMe.column_channel',
    defaultMessage: 'Channel',
  },
  column_status: {
    id: 'access.shareWithMe.column_status',
    defaultMessage: 'Connected',
  },
  column_adAccountName: {
    id: 'access.shareWithMe.column_adAccountName',
    defaultMessage: 'Ads Account Name',
  },
  column_adAccountId: {
    id: 'access.shareWithMe.column_adAccountId',
    defaultMessage: 'Ads Account ID',
  },
  column_syncCampaigns: {
    id: 'access.shareWithMe.column_syncCampaigns',
    defaultMessage: 'Sync Campaign',
  },
  column_myRole: {
    id: 'access.shareWithMe.column_myRole',
    defaultMessage: 'My Role',
  },
  sync_now_label: {
    id: 'access.shareWithMe.sync_now_label',
    defaultMessage: 'Sync now',
  },

  modal_title: {
    id: 'access.shareWithMe.modal_title',
    defaultMessage: 'Are you sure to leave this team?',
  },
  modal_body: {
    id: 'access.shareWithMe.modal_body',
    defaultMessage: 'You will not be allowed to manage this ad account any more.',
  },
  modal_cancel: {
    id: 'access.shareWithMe.modal_cancel',
    defaultMessage: 'Cancel',
  },
  modal_confirm: {
    id: 'access.shareWithMe.modal_confirm',
    defaultMessage: 'Leave now',
  },

  modal_revoke_title: {
    id: 'access.shareWithMe.modal_revoke_title',
    defaultMessage: 'Are you sure to revoke a member from ad account?',
  },
  modal_revoke_body: {
    id: 'access.shareWithMe.modal_revoke_body',
    defaultMessage: `This member won't be allowed to access to an ad account.`,
  },
  modal_revoke_cancel: {
    id: 'access.shareWithMe.modal_revoke_cancel',
    defaultMessage: 'Cancel',
  },
  modal_revoke_confirm: {
    id: 'access.shareWithMe.modal_revoke_confirm',
    defaultMessage: 'Revoke',
  },

  join_team_invitation_title: {
    id: 'access.shareWithMe.invitation.title',
    defaultMessage: 'You are invited to join the team',
  },
  join_team_invitation_sub_title: {
    id: 'access.shareWithMe.invitation.sub_title',
    defaultMessage: '{userEmail} has invited you to join a team {userName} with role {role}',
  },
  join_team_invitation_action_join_team: {
    id: 'access.shareWithMe.invitation.action.join_team',
    defaultMessage: 'Join team',
  },
  join_team_invitation_action_deny: {
    id: 'access.shareWithMe.invitation.action.deny',
    defaultMessage: 'Deny',
  },
});
