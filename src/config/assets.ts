export type InvitationVersion = '1' | '2'

/** Rutas bajo /public/assets */
export const assets = {
  invitations: {
    '1': '/assets/invitation.jpg',
    '2': '/assets/invitation_two.jpg',
  } satisfies Record<InvitationVersion, string>,
  cupcakeSvg: '/assets/cupcake.svg',
  ogImage: '/assets/og-image.png',
  paperTexture: '/assets/paper-texture.png',
  maca: '/assets/maca.png',
  balloonOne: '/assets/balloon-1.png',
  discoBall: '/assets/disco-ball.png',
  star: '/assets/star.png',
  bunting: '/assets/bunting.png',
  lemonadeGlass: '/assets/lemonade-glass.png',
  cupcake: '/assets/cupcake.png',
  bow: '/assets/bow.png',
} as const

export const audio = {
  birthdaySong: '/audio/macarenatwo.m4a',
} as const
