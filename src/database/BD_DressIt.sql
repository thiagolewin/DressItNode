
USE [DressIt]
GO
/****** Object:  Table [dbo].[FollowXUser]    Script Date: 9/6/2024 02:48:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FollowXUser](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[idUsuarioSeguidor] [int] NOT NULL,
	[idUsuarioSeguido] [int] NOT NULL,
 CONSTRAINT [PK_Seguidores] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Genders]    Script Date: 9/6/2024 02:48:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Genders](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](50) NULL,
 CONSTRAINT [PK_Genders] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Posts]    Script Date: 9/6/2024 02:48:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Posts](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[idCreator] [int] NOT NULL,
	[description] [varchar](100) NOT NULL,
	[price] [float] NOT NULL,
	[creationDate] [date] NOT NULL,
	[name] [varchar](50) NOT NULL,
	[wearType] [int] NOT NULL,
	[gender] [int] NOT NULL,
	[imgPath] [varchar](max) NOT NULL,
	[link] [varchar](max) NOT NULL,
 CONSTRAINT [PK_Posts] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PostsXUser]    Script Date: 9/6/2024 02:48:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PostsXUser](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[idUser] [int] NOT NULL,
	[idPost] [int] NOT NULL,
 CONSTRAINT [PK_PostsXUser] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tags]    Script Date: 9/6/2024 02:48:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tags](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Tags] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TagXPost]    Script Date: 9/6/2024 02:48:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TagXPost](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[idPost] [int] NOT NULL,
	[idTag] [int] NOT NULL,
 CONSTRAINT [PK_TagXPost] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 9/6/2024 02:48:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[username] [varchar](50) NOT NULL,
	[password] [varchar](50) NOT NULL,
	[email] [varchar](50) NOT NULL,
	[pfp] [varchar](max) NULL,
 CONSTRAINT [PK_Usuarios] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[WearTypes]    Script Date: 9/6/2024 02:48:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[WearTypes](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](50) NULL,
 CONSTRAINT [PK_WearTypes] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Genders] ON 

INSERT [dbo].[Genders] ([id], [name]) VALUES (1, N'masculino')
INSERT [dbo].[Genders] ([id], [name]) VALUES (2, N'femenino')
SET IDENTITY_INSERT [dbo].[Genders] OFF
GO
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([id], [username], [password], [email], [pfp]) VALUES (1, N'nike', N'Nike123Hola', N'nike@gmail.com', N'https://www.brandemia.org/wp-content/uploads/2011/09/logo_nike_principal.jpg')
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
SET IDENTITY_INSERT [dbo].[WearTypes] ON 

INSERT [dbo].[WearTypes] ([id], [name]) VALUES (1, N'remero')
INSERT [dbo].[WearTypes] ([id], [name]) VALUES (2, N'pant')
SET IDENTITY_INSERT [dbo].[WearTypes] OFF
GO
ALTER TABLE [dbo].[FollowXUser]  WITH CHECK ADD  CONSTRAINT [FK_Seguidores_Usuarios] FOREIGN KEY([idUsuarioSeguidor])
REFERENCES [dbo].[Users] ([id])
GO
ALTER TABLE [dbo].[FollowXUser] CHECK CONSTRAINT [FK_Seguidores_Usuarios]
GO
ALTER TABLE [dbo].[FollowXUser]  WITH CHECK ADD  CONSTRAINT [FK_Seguidores_Usuarios1] FOREIGN KEY([idUsuarioSeguido])
REFERENCES [dbo].[Users] ([id])
GO
ALTER TABLE [dbo].[FollowXUser] CHECK CONSTRAINT [FK_Seguidores_Usuarios1]
GO
ALTER TABLE [dbo].[Posts]  WITH CHECK ADD  CONSTRAINT [FK_Post_User] FOREIGN KEY([idCreator])
REFERENCES [dbo].[Users] ([id])
GO
ALTER TABLE [dbo].[Posts] CHECK CONSTRAINT [FK_Post_User]
GO
ALTER TABLE [dbo].[Posts]  WITH CHECK ADD  CONSTRAINT [FK_Posts_Genders] FOREIGN KEY([gender])
REFERENCES [dbo].[Genders] ([id])
GO
ALTER TABLE [dbo].[Posts] CHECK CONSTRAINT [FK_Posts_Genders]
GO
ALTER TABLE [dbo].[Posts]  WITH CHECK ADD  CONSTRAINT [FK_Posts_Users] FOREIGN KEY([idCreator])
REFERENCES [dbo].[Users] ([id])
GO
ALTER TABLE [dbo].[Posts] CHECK CONSTRAINT [FK_Posts_Users]
GO
ALTER TABLE [dbo].[Posts]  WITH CHECK ADD  CONSTRAINT [FK_Posts_WearTypes] FOREIGN KEY([wearType])
REFERENCES [dbo].[WearTypes] ([id])
GO
ALTER TABLE [dbo].[Posts] CHECK CONSTRAINT [FK_Posts_WearTypes]
GO
ALTER TABLE [dbo].[PostsXUser]  WITH CHECK ADD  CONSTRAINT [FK_PostsXUser_Posts] FOREIGN KEY([idPost])
REFERENCES [dbo].[Posts] ([id])
GO
ALTER TABLE [dbo].[PostsXUser] CHECK CONSTRAINT [FK_PostsXUser_Posts]
GO
ALTER TABLE [dbo].[PostsXUser]  WITH CHECK ADD  CONSTRAINT [FK_PostsXUser_Users] FOREIGN KEY([idUser])
REFERENCES [dbo].[Users] ([id])
GO
ALTER TABLE [dbo].[PostsXUser] CHECK CONSTRAINT [FK_PostsXUser_Users]
GO
ALTER TABLE [dbo].[TagXPost]  WITH CHECK ADD  CONSTRAINT [FK_TagXPost_Posts] FOREIGN KEY([idPost])
REFERENCES [dbo].[Posts] ([id])
GO
ALTER TABLE [dbo].[TagXPost] CHECK CONSTRAINT [FK_TagXPost_Posts]
GO
ALTER TABLE [dbo].[TagXPost]  WITH CHECK ADD  CONSTRAINT [FK_TagXPost_Tags] FOREIGN KEY([idTag])
REFERENCES [dbo].[Tags] ([id])
GO
ALTER TABLE [dbo].[TagXPost] CHECK CONSTRAINT [FK_TagXPost_Tags]
GO
USE [master]
GO
ALTER DATABASE [DressIt] SET  READ_WRITE 
GO
