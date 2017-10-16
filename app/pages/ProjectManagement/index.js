// @flow

import React, { Component } from 'react';

import Introduction from 'components/Introduction';
import ManagementContent from 'components/ManagementContent';
import ManagementFeature from 'components/ManagementFeature';
import GetStarted from 'components/GetStarted';

class ProjectManagementPage extends Component {
  render() {
    return (
      <div>
        <Introduction title="Allocate makes staying on top of your projects<br />easier than ever before" />
        <ManagementContent />
        <ManagementFeature />
        <GetStarted />
      </div>
    );
  }
}

export default ProjectManagementPage;
