import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import { Social } from '../../../components';
import Readme from '../../../components/Social/README.md';
import PropsManager from '../../../../storybook-utils/components/PropsManager';

const stories = storiesOf('Components/Social', module);

stories.add(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Social"
        description="Websites and applications that enable users to create and share content or to participate in social networking. Allow your users to share the content of your website in their social networks."
      />
      <PropsManager scope={{ React, Social }}>
        {`<Social gray type="facebook" rounded url="https://front10.com" directLink={false} />`}
      </PropsManager>
    </ThemeSelector>
  ))
);

stories.add(
  'All',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Social"
        storyName="All social media buttons"
        description="Websites and applications that enable users to create and share content or to participate in social networking. Allow your users to share the content of your website in their social networks"
      />
      <PropsManager scope={{ React, Social }}>
        {`<React.Fragment>
    <Social gray={false} type="email" rounded url="https://front10.com" />
    <Social gray={false} type="facebook" rounded url="https://front10.com" />
    <Social gray={false} type="google" rounded url="https://front10.com" />
    <Social gray={false} type="linkedin" rounded url="https://front10.com" />
    <Social gray={false} type="livejournal" rounded url="https://front10.com" />
    <Social gray={false} type="ok" rounded url="https://front10.com" />
    <Social gray={false} type="pinterest" rounded url="https://front10.com" />
    <Social gray={false} type="reddit" rounded url="https://front10.com" />
    <Social gray={false} type="telegram" rounded url="https://front10.com" />
    <Social gray={false} type="tumblr" rounded url="https://front10.com" />
    <Social gray={false} type="twitter" rounded url="https://front10.com" />
    <Social gray={false} type="viber" rounded url="https://front10.com" />
    <Social gray={false} type="vk" rounded url="https://front10.com" />
    <Social gray={false} type="whatsapp" rounded url="https://front10.com" />
</React.Fragment>`}
      </PropsManager>
    </ThemeSelector>
  ))
);
