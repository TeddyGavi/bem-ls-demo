import styled, { css } from 'styled-components';
import clsx from 'clsx';

import s from './Profile.module.scss';
import './Profile.scss';

const Wrapper = styled.section<{ $compact?: boolean }>`
  padding: ${(p) => (p.$compact ? '0.5rem' : '1rem')};

  ${(p) =>
    p.$compact &&
    css`
      border: 0;
    `}
`;

const Name = styled.h2`
  margin: 0;
`;

type User = {
  avatar: string;
  name: string;
  posts: number;
};

type ProfileProps = {
  user: User;
  compact?: boolean;
};

export function Profile({ user, compact }: ProfileProps) {
  return (
    <Wrapper
      $compact={compact}
      className="profile"
    >
      <img
        className={s.avatar}
        src={user.avatar}
        alt=""
      />

      <Name className="profile__name">
        {user.name}
      </Name>

      <ul
        className={clsx(
          s.stats,
          compact && s['stats--compact'],
        )}
      >
        <li className="profile__stat">
          {user.posts}
        </li>
      </ul>
    </Wrapper>
  );
}
