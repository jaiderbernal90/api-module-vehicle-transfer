PGDMP  '    &        
         }            vehicle_transfer    16.6 (Debian 16.6-1.pgdg120+1)    17.2 \    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            �           1262    16389    vehicle_transfer    DATABASE     {   CREATE DATABASE vehicle_transfer WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.UTF8';
     DROP DATABASE vehicle_transfer;
                     vehicle_transfer_user    false            �           0    0    vehicle_transfer    DATABASE PROPERTIES     9   ALTER DATABASE vehicle_transfer SET "TimeZone" TO 'utc';
                          vehicle_transfer_user    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                     vehicle_transfer_user    false            �           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                        vehicle_transfer_user    false    5            �            1259    16439    organizational_units    TABLE     B  CREATE TABLE public.organizational_units (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    project_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    deleted_at timestamp without time zone
);
 (   DROP TABLE public.organizational_units;
       public         heap r       vehicle_transfer_user    false    5            �            1259    16438    organizational_units_id_seq    SEQUENCE     �   CREATE SEQUENCE public.organizational_units_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public.organizational_units_id_seq;
       public               vehicle_transfer_user    false    5    224            �           0    0    organizational_units_id_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public.organizational_units_id_seq OWNED BY public.organizational_units.id;
          public               vehicle_transfer_user    false    223            �            1259    16399    permissions    TABLE     8  CREATE TABLE public.permissions (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    description text NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    deleted_at timestamp without time zone
);
    DROP TABLE public.permissions;
       public         heap r       vehicle_transfer_user    false    5            �            1259    16398    permissions_id_seq    SEQUENCE     �   CREATE SEQUENCE public.permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.permissions_id_seq;
       public               vehicle_transfer_user    false    216    5            �           0    0    permissions_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.permissions_id_seq OWNED BY public.permissions.id;
          public               vehicle_transfer_user    false    215            �            1259    16448    projects    TABLE     4  CREATE TABLE public.projects (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    description text NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    deleted_at timestamp without time zone
);
    DROP TABLE public.projects;
       public         heap r       vehicle_transfer_user    false    5            �            1259    16447    projects_id_seq    SEQUENCE     �   CREATE SEQUENCE public.projects_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.projects_id_seq;
       public               vehicle_transfer_user    false    226    5            �           0    0    projects_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.projects_id_seq OWNED BY public.projects.id;
          public               vehicle_transfer_user    false    225            �            1259    16410    roles    TABLE     1  CREATE TABLE public.roles (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    description text NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    deleted_at timestamp without time zone
);
    DROP TABLE public.roles;
       public         heap r       vehicle_transfer_user    false    5            �            1259    16409    roles_id_seq    SEQUENCE     �   CREATE SEQUENCE public.roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.roles_id_seq;
       public               vehicle_transfer_user    false    5    218            �           0    0    roles_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;
          public               vehicle_transfer_user    false    217            �            1259    16473    roles_permissions    TABLE     l   CREATE TABLE public.roles_permissions (
    permission_id integer NOT NULL,
    role_id integer NOT NULL
);
 %   DROP TABLE public.roles_permissions;
       public         heap r       vehicle_transfer_user    false    5            �            1259    16430 	   transfers    TABLE     �  CREATE TABLE public.transfers (
    id integer NOT NULL,
    type character varying(100) NOT NULL,
    vehicle_id integer NOT NULL,
    client_id integer NOT NULL,
    transmitter_id integer NOT NULL,
    project_id integer NOT NULL,
    organizational_unit_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    deleted_at timestamp without time zone
);
    DROP TABLE public.transfers;
       public         heap r       vehicle_transfer_user    false    5            �            1259    16429    transfers_id_seq    SEQUENCE     �   CREATE SEQUENCE public.transfers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.transfers_id_seq;
       public               vehicle_transfer_user    false    5    222            �           0    0    transfers_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.transfers_id_seq OWNED BY public.transfers.id;
          public               vehicle_transfer_user    false    221            �            1259    16459    users    TABLE     o  CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(50) NOT NULL,
    email character varying(100) NOT NULL,
    password_hash character varying NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    deleted_at timestamp without time zone
);
    DROP TABLE public.users;
       public         heap r       vehicle_transfer_user    false    5            �            1259    16458    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public               vehicle_transfer_user    false    5    228            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public               vehicle_transfer_user    false    227            �            1259    16487    users_organizational_units    TABLE     ~   CREATE TABLE public.users_organizational_units (
    organizational_unit_id integer NOT NULL,
    user_id integer NOT NULL
);
 .   DROP TABLE public.users_organizational_units;
       public         heap r       vehicle_transfer_user    false    5            �            1259    16494    users_projects    TABLE     f   CREATE TABLE public.users_projects (
    project_id integer NOT NULL,
    user_id integer NOT NULL
);
 "   DROP TABLE public.users_projects;
       public         heap r       vehicle_transfer_user    false    5            �            1259    16480    users_roles    TABLE     `   CREATE TABLE public.users_roles (
    role_id integer NOT NULL,
    user_id integer NOT NULL
);
    DROP TABLE public.users_roles;
       public         heap r       vehicle_transfer_user    false    5            �            1259    16421    vehicles    TABLE     C  CREATE TABLE public.vehicles (
    id integer NOT NULL,
    plate character varying(10) NOT NULL,
    service character varying(100) NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    deleted_at timestamp without time zone
);
    DROP TABLE public.vehicles;
       public         heap r       vehicle_transfer_user    false    5            �            1259    16420    vehicles_id_seq    SEQUENCE     �   CREATE SEQUENCE public.vehicles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.vehicles_id_seq;
       public               vehicle_transfer_user    false    5    220            �           0    0    vehicles_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.vehicles_id_seq OWNED BY public.vehicles.id;
          public               vehicle_transfer_user    false    219            �           2604    16442    organizational_units id    DEFAULT     �   ALTER TABLE ONLY public.organizational_units ALTER COLUMN id SET DEFAULT nextval('public.organizational_units_id_seq'::regclass);
 F   ALTER TABLE public.organizational_units ALTER COLUMN id DROP DEFAULT;
       public               vehicle_transfer_user    false    224    223    224            �           2604    16402    permissions id    DEFAULT     p   ALTER TABLE ONLY public.permissions ALTER COLUMN id SET DEFAULT nextval('public.permissions_id_seq'::regclass);
 =   ALTER TABLE public.permissions ALTER COLUMN id DROP DEFAULT;
       public               vehicle_transfer_user    false    215    216    216            �           2604    16451    projects id    DEFAULT     j   ALTER TABLE ONLY public.projects ALTER COLUMN id SET DEFAULT nextval('public.projects_id_seq'::regclass);
 :   ALTER TABLE public.projects ALTER COLUMN id DROP DEFAULT;
       public               vehicle_transfer_user    false    226    225    226            �           2604    16413    roles id    DEFAULT     d   ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);
 7   ALTER TABLE public.roles ALTER COLUMN id DROP DEFAULT;
       public               vehicle_transfer_user    false    218    217    218            �           2604    16433    transfers id    DEFAULT     l   ALTER TABLE ONLY public.transfers ALTER COLUMN id SET DEFAULT nextval('public.transfers_id_seq'::regclass);
 ;   ALTER TABLE public.transfers ALTER COLUMN id DROP DEFAULT;
       public               vehicle_transfer_user    false    222    221    222            �           2604    16462    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public               vehicle_transfer_user    false    228    227    228            �           2604    16424    vehicles id    DEFAULT     j   ALTER TABLE ONLY public.vehicles ALTER COLUMN id SET DEFAULT nextval('public.vehicles_id_seq'::regclass);
 :   ALTER TABLE public.vehicles ALTER COLUMN id DROP DEFAULT;
       public               vehicle_transfer_user    false    219    220    220            �          0    16439    organizational_units 
   TABLE DATA                 public               vehicle_transfer_user    false    224   
x       �          0    16399    permissions 
   TABLE DATA                 public               vehicle_transfer_user    false    216   �x       �          0    16448    projects 
   TABLE DATA                 public               vehicle_transfer_user    false    226   �y       �          0    16410    roles 
   TABLE DATA                 public               vehicle_transfer_user    false    218   �z       �          0    16473    roles_permissions 
   TABLE DATA                 public               vehicle_transfer_user    false    229   �{       �          0    16430 	   transfers 
   TABLE DATA                 public               vehicle_transfer_user    false    222   
|       �          0    16459    users 
   TABLE DATA                 public               vehicle_transfer_user    false    228   $|       �          0    16487    users_organizational_units 
   TABLE DATA                 public               vehicle_transfer_user    false    231   }       �          0    16494    users_projects 
   TABLE DATA                 public               vehicle_transfer_user    false    232   �}       �          0    16480    users_roles 
   TABLE DATA                 public               vehicle_transfer_user    false    230   �}       �          0    16421    vehicles 
   TABLE DATA                 public               vehicle_transfer_user    false    220   Y~       �           0    0    organizational_units_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.organizational_units_id_seq', 4, true);
          public               vehicle_transfer_user    false    223            �           0    0    permissions_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.permissions_id_seq', 4, true);
          public               vehicle_transfer_user    false    215            �           0    0    projects_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.projects_id_seq', 4, true);
          public               vehicle_transfer_user    false    225            �           0    0    roles_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.roles_id_seq', 4, true);
          public               vehicle_transfer_user    false    217            �           0    0    transfers_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.transfers_id_seq', 1, false);
          public               vehicle_transfer_user    false    221            �           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 4, true);
          public               vehicle_transfer_user    false    227            �           0    0    vehicles_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.vehicles_id_seq', 10, true);
          public               vehicle_transfer_user    false    219            �           2606    16477 0   roles_permissions PK_0cd11f0b35c4d348c6ebb9b36b7 
   CONSTRAINT     �   ALTER TABLE ONLY public.roles_permissions
    ADD CONSTRAINT "PK_0cd11f0b35c4d348c6ebb9b36b7" PRIMARY KEY (permission_id, role_id);
 \   ALTER TABLE ONLY public.roles_permissions DROP CONSTRAINT "PK_0cd11f0b35c4d348c6ebb9b36b7";
       public                 vehicle_transfer_user    false    229    229            �           2606    16428 '   vehicles PK_18d8646b59304dce4af3a9e35b6 
   CONSTRAINT     g   ALTER TABLE ONLY public.vehicles
    ADD CONSTRAINT "PK_18d8646b59304dce4af3a9e35b6" PRIMARY KEY (id);
 S   ALTER TABLE ONLY public.vehicles DROP CONSTRAINT "PK_18d8646b59304dce4af3a9e35b6";
       public                 vehicle_transfer_user    false    220            �           2606    16457 '   projects PK_6271df0a7aed1d6c0691ce6ac50 
   CONSTRAINT     g   ALTER TABLE ONLY public.projects
    ADD CONSTRAINT "PK_6271df0a7aed1d6c0691ce6ac50" PRIMARY KEY (id);
 S   ALTER TABLE ONLY public.projects DROP CONSTRAINT "PK_6271df0a7aed1d6c0691ce6ac50";
       public                 vehicle_transfer_user    false    226            �           2606    16408 *   permissions PK_920331560282b8bd21bb02290df 
   CONSTRAINT     j   ALTER TABLE ONLY public.permissions
    ADD CONSTRAINT "PK_920331560282b8bd21bb02290df" PRIMARY KEY (id);
 V   ALTER TABLE ONLY public.permissions DROP CONSTRAINT "PK_920331560282b8bd21bb02290df";
       public                 vehicle_transfer_user    false    216            �           2606    16468 $   users PK_a3ffb1c0c8416b9fc6f907b7433 
   CONSTRAINT     d   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.users DROP CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433";
       public                 vehicle_transfer_user    false    228            �           2606    16498 -   users_projects PK_b3d64b8e224db96928732039cc1 
   CONSTRAINT     ~   ALTER TABLE ONLY public.users_projects
    ADD CONSTRAINT "PK_b3d64b8e224db96928732039cc1" PRIMARY KEY (project_id, user_id);
 Y   ALTER TABLE ONLY public.users_projects DROP CONSTRAINT "PK_b3d64b8e224db96928732039cc1";
       public                 vehicle_transfer_user    false    232    232            �           2606    16419 $   roles PK_c1433d71a4838793a49dcad46ab 
   CONSTRAINT     d   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.roles DROP CONSTRAINT "PK_c1433d71a4838793a49dcad46ab";
       public                 vehicle_transfer_user    false    218            �           2606    16484 *   users_roles PK_c525e9373d63035b9919e578a9c 
   CONSTRAINT     x   ALTER TABLE ONLY public.users_roles
    ADD CONSTRAINT "PK_c525e9373d63035b9919e578a9c" PRIMARY KEY (role_id, user_id);
 V   ALTER TABLE ONLY public.users_roles DROP CONSTRAINT "PK_c525e9373d63035b9919e578a9c";
       public                 vehicle_transfer_user    false    230    230            �           2606    16446 3   organizational_units PK_d818d009beb8256752e477fe4c7 
   CONSTRAINT     s   ALTER TABLE ONLY public.organizational_units
    ADD CONSTRAINT "PK_d818d009beb8256752e477fe4c7" PRIMARY KEY (id);
 _   ALTER TABLE ONLY public.organizational_units DROP CONSTRAINT "PK_d818d009beb8256752e477fe4c7";
       public                 vehicle_transfer_user    false    224            �           2606    16437 (   transfers PK_f712e908b465e0085b4408cabc3 
   CONSTRAINT     h   ALTER TABLE ONLY public.transfers
    ADD CONSTRAINT "PK_f712e908b465e0085b4408cabc3" PRIMARY KEY (id);
 T   ALTER TABLE ONLY public.transfers DROP CONSTRAINT "PK_f712e908b465e0085b4408cabc3";
       public                 vehicle_transfer_user    false    222            �           2606    16491 9   users_organizational_units PK_f754af9280683f18515b66bd026 
   CONSTRAINT     �   ALTER TABLE ONLY public.users_organizational_units
    ADD CONSTRAINT "PK_f754af9280683f18515b66bd026" PRIMARY KEY (organizational_unit_id, user_id);
 e   ALTER TABLE ONLY public.users_organizational_units DROP CONSTRAINT "PK_f754af9280683f18515b66bd026";
       public                 vehicle_transfer_user    false    231    231            �           2606    16472 $   users UQ_97672ac88f789774dd47f7c8be3 
   CONSTRAINT     b   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE (email);
 P   ALTER TABLE ONLY public.users DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3";
       public                 vehicle_transfer_user    false    228            �           2606    16470 $   users UQ_fe0bb3f6520ee0469504521e710 
   CONSTRAINT     e   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE (username);
 P   ALTER TABLE ONLY public.users DROP CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710";
       public                 vehicle_transfer_user    false    228            �           1259    16500    IDX_0f280c70a3a6ab7f4cf3c658c4    INDEX     ^   CREATE INDEX "IDX_0f280c70a3a6ab7f4cf3c658c4" ON public.users_projects USING btree (user_id);
 4   DROP INDEX public."IDX_0f280c70a3a6ab7f4cf3c658c4";
       public                 vehicle_transfer_user    false    232            �           1259    16485    IDX_1cf664021f00b9cc1ff95e17de    INDEX     [   CREATE INDEX "IDX_1cf664021f00b9cc1ff95e17de" ON public.users_roles USING btree (role_id);
 4   DROP INDEX public."IDX_1cf664021f00b9cc1ff95e17de";
       public                 vehicle_transfer_user    false    230            �           1259    16478    IDX_337aa8dba227a1fe6b73998307    INDEX     g   CREATE INDEX "IDX_337aa8dba227a1fe6b73998307" ON public.roles_permissions USING btree (permission_id);
 4   DROP INDEX public."IDX_337aa8dba227a1fe6b73998307";
       public                 vehicle_transfer_user    false    229            �           1259    16492    IDX_585283a16041bdd0b3b50e6e03    INDEX     y   CREATE INDEX "IDX_585283a16041bdd0b3b50e6e03" ON public.users_organizational_units USING btree (organizational_unit_id);
 4   DROP INDEX public."IDX_585283a16041bdd0b3b50e6e03";
       public                 vehicle_transfer_user    false    231            �           1259    16499    IDX_741210c246defe00ed877a98f2    INDEX     a   CREATE INDEX "IDX_741210c246defe00ed877a98f2" ON public.users_projects USING btree (project_id);
 4   DROP INDEX public."IDX_741210c246defe00ed877a98f2";
       public                 vehicle_transfer_user    false    232            �           1259    16479    IDX_7d2dad9f14eddeb09c256fea71    INDEX     a   CREATE INDEX "IDX_7d2dad9f14eddeb09c256fea71" ON public.roles_permissions USING btree (role_id);
 4   DROP INDEX public."IDX_7d2dad9f14eddeb09c256fea71";
       public                 vehicle_transfer_user    false    229            �           1259    16493    IDX_83e50dc31b1a76f2d61302d524    INDEX     j   CREATE INDEX "IDX_83e50dc31b1a76f2d61302d524" ON public.users_organizational_units USING btree (user_id);
 4   DROP INDEX public."IDX_83e50dc31b1a76f2d61302d524";
       public                 vehicle_transfer_user    false    231            �           1259    16486    IDX_e4435209df12bc1f001e536017    INDEX     [   CREATE INDEX "IDX_e4435209df12bc1f001e536017" ON public.users_roles USING btree (user_id);
 4   DROP INDEX public."IDX_e4435209df12bc1f001e536017";
       public                 vehicle_transfer_user    false    230            �           2606    16846 -   users_projects FK_0f280c70a3a6ab7f4cf3c658c4c    FK CONSTRAINT     �   ALTER TABLE ONLY public.users_projects
    ADD CONSTRAINT "FK_0f280c70a3a6ab7f4cf3c658c4c" FOREIGN KEY (user_id) REFERENCES public.users(id);
 Y   ALTER TABLE ONLY public.users_projects DROP CONSTRAINT "FK_0f280c70a3a6ab7f4cf3c658c4c";
       public               vehicle_transfer_user    false    228    232    3287            �           2606    16821 *   users_roles FK_1cf664021f00b9cc1ff95e17de4    FK CONSTRAINT     �   ALTER TABLE ONLY public.users_roles
    ADD CONSTRAINT "FK_1cf664021f00b9cc1ff95e17de4" FOREIGN KEY (role_id) REFERENCES public.roles(id) ON UPDATE CASCADE ON DELETE CASCADE;
 V   ALTER TABLE ONLY public.users_roles DROP CONSTRAINT "FK_1cf664021f00b9cc1ff95e17de4";
       public               vehicle_transfer_user    false    3277    218    230            �           2606    16811 0   roles_permissions FK_337aa8dba227a1fe6b73998307b    FK CONSTRAINT     �   ALTER TABLE ONLY public.roles_permissions
    ADD CONSTRAINT "FK_337aa8dba227a1fe6b73998307b" FOREIGN KEY (permission_id) REFERENCES public.permissions(id) ON UPDATE CASCADE ON DELETE CASCADE;
 \   ALTER TABLE ONLY public.roles_permissions DROP CONSTRAINT "FK_337aa8dba227a1fe6b73998307b";
       public               vehicle_transfer_user    false    216    229    3275            �           2606    16501 (   transfers FK_4a5eedc863f271f9a6c9a17dab3    FK CONSTRAINT     �   ALTER TABLE ONLY public.transfers
    ADD CONSTRAINT "FK_4a5eedc863f271f9a6c9a17dab3" FOREIGN KEY (vehicle_id) REFERENCES public.vehicles(id);
 T   ALTER TABLE ONLY public.transfers DROP CONSTRAINT "FK_4a5eedc863f271f9a6c9a17dab3";
       public               vehicle_transfer_user    false    220    222    3279            �           2606    16831 9   users_organizational_units FK_585283a16041bdd0b3b50e6e03d    FK CONSTRAINT     �   ALTER TABLE ONLY public.users_organizational_units
    ADD CONSTRAINT "FK_585283a16041bdd0b3b50e6e03d" FOREIGN KEY (organizational_unit_id) REFERENCES public.organizational_units(id) ON UPDATE CASCADE ON DELETE CASCADE;
 e   ALTER TABLE ONLY public.users_organizational_units DROP CONSTRAINT "FK_585283a16041bdd0b3b50e6e03d";
       public               vehicle_transfer_user    false    224    3283    231            �           2606    16526 3   organizational_units FK_6fb51564b2e6694782fa742eaa3    FK CONSTRAINT     �   ALTER TABLE ONLY public.organizational_units
    ADD CONSTRAINT "FK_6fb51564b2e6694782fa742eaa3" FOREIGN KEY (project_id) REFERENCES public.projects(id);
 _   ALTER TABLE ONLY public.organizational_units DROP CONSTRAINT "FK_6fb51564b2e6694782fa742eaa3";
       public               vehicle_transfer_user    false    226    3285    224            �           2606    16841 -   users_projects FK_741210c246defe00ed877a98f2a    FK CONSTRAINT     �   ALTER TABLE ONLY public.users_projects
    ADD CONSTRAINT "FK_741210c246defe00ed877a98f2a" FOREIGN KEY (project_id) REFERENCES public.projects(id) ON UPDATE CASCADE ON DELETE CASCADE;
 Y   ALTER TABLE ONLY public.users_projects DROP CONSTRAINT "FK_741210c246defe00ed877a98f2a";
       public               vehicle_transfer_user    false    226    232    3285            �           2606    16516 (   transfers FK_74d763f971b949e14a946b2fbe8    FK CONSTRAINT     �   ALTER TABLE ONLY public.transfers
    ADD CONSTRAINT "FK_74d763f971b949e14a946b2fbe8" FOREIGN KEY (organizational_unit_id) REFERENCES public.organizational_units(id);
 T   ALTER TABLE ONLY public.transfers DROP CONSTRAINT "FK_74d763f971b949e14a946b2fbe8";
       public               vehicle_transfer_user    false    222    3283    224            �           2606    16816 0   roles_permissions FK_7d2dad9f14eddeb09c256fea719    FK CONSTRAINT     �   ALTER TABLE ONLY public.roles_permissions
    ADD CONSTRAINT "FK_7d2dad9f14eddeb09c256fea719" FOREIGN KEY (role_id) REFERENCES public.roles(id);
 \   ALTER TABLE ONLY public.roles_permissions DROP CONSTRAINT "FK_7d2dad9f14eddeb09c256fea719";
       public               vehicle_transfer_user    false    3277    229    218            �           2606    16836 9   users_organizational_units FK_83e50dc31b1a76f2d61302d5246    FK CONSTRAINT     �   ALTER TABLE ONLY public.users_organizational_units
    ADD CONSTRAINT "FK_83e50dc31b1a76f2d61302d5246" FOREIGN KEY (user_id) REFERENCES public.users(id);
 e   ALTER TABLE ONLY public.users_organizational_units DROP CONSTRAINT "FK_83e50dc31b1a76f2d61302d5246";
       public               vehicle_transfer_user    false    3287    228    231            �           2606    16506 (   transfers FK_9249ca69c046f687f06bafa43bb    FK CONSTRAINT     �   ALTER TABLE ONLY public.transfers
    ADD CONSTRAINT "FK_9249ca69c046f687f06bafa43bb" FOREIGN KEY (client_id) REFERENCES public.users(id);
 T   ALTER TABLE ONLY public.transfers DROP CONSTRAINT "FK_9249ca69c046f687f06bafa43bb";
       public               vehicle_transfer_user    false    222    228    3287            �           2606    16511 (   transfers FK_b51bdb870765d09872dd4400451    FK CONSTRAINT     �   ALTER TABLE ONLY public.transfers
    ADD CONSTRAINT "FK_b51bdb870765d09872dd4400451" FOREIGN KEY (transmitter_id) REFERENCES public.users(id);
 T   ALTER TABLE ONLY public.transfers DROP CONSTRAINT "FK_b51bdb870765d09872dd4400451";
       public               vehicle_transfer_user    false    222    3287    228            �           2606    16826 *   users_roles FK_e4435209df12bc1f001e5360174    FK CONSTRAINT     �   ALTER TABLE ONLY public.users_roles
    ADD CONSTRAINT "FK_e4435209df12bc1f001e5360174" FOREIGN KEY (user_id) REFERENCES public.users(id);
 V   ALTER TABLE ONLY public.users_roles DROP CONSTRAINT "FK_e4435209df12bc1f001e5360174";
       public               vehicle_transfer_user    false    3287    230    228            �           2606    16521 (   transfers FK_fc2701ec117b3be7833dd385de0    FK CONSTRAINT     �   ALTER TABLE ONLY public.transfers
    ADD CONSTRAINT "FK_fc2701ec117b3be7833dd385de0" FOREIGN KEY (project_id) REFERENCES public.projects(id);
 T   ALTER TABLE ONLY public.transfers DROP CONSTRAINT "FK_fc2701ec117b3be7833dd385de0";
       public               vehicle_transfer_user    false    222    3285    226            �   �   x����ʂ@G�>��YP���MN�.����SJ��Y�ީ��Ś�E��>��;7J�p��(Y/�x�vG�zoJ{5��JS��Kۜ�oo�l~���1��f ��P]la3��#xbN9�)3
Li�5"*P�?�d�Ù}ŝwY�3k��wW�f�`��O{������X�'�WDw5��	*�AOE��X!�*�����D3E
����M_�� ���G      �   �   x���O�0��~��fA�6g���:b��a�h`%n��o�*B�>�����d�K!��-4ݡ�ݰ�̅�׋�|e�&x捳�^��EY+LErE@��\H�Aۢ����Aĵ�0<0��K<Jm�E�ta�����+[VH�^��lT���A�_���*V�Ϯ�f������^/�_Us]S}�+�lTu\��A��2�"s�E      �   �   x��б�0����M��Gm'���{�&b�
>��`�ۥ�����imw���]^��W7�����a��&t�A][	iʛ��Zu?ߏ
n�T]��{\�	�ST�Cd��-L�I2]9�HG�/H��KNfM�`����˥�A�[=P�,\���8A!k��=��:�@R�J7��ң[���9����8wd��      �   �   x���Mk�@���s����&�=��!R�Z�q܌�d�~ؿ�"-T��f�^�)���}E��>M������Z�;x�s�Q�6�lX>mM���=d�3Co(�ɺ�z����)@�čPK\�k�Fiu(�痤��!�Ǟݥ���tӎ)�b_�����G�?���@�cp�_:���m���4�,(W�t�������E���<������f�$��C��      �   b   x���v
Q���W((M��L�+��I-�/H-��,.���+Vs�	uV�0�Q0Դ��$E�z���cB������zL��t�1zL��H ���      �   
   x���          �   �   x���Mk�@໿b�)4���/M/)łT$�k�f)��*)����z�\�ü�0O���]J�$ݒ��?˂���j��9��=Y�#�N窼xc������a�b�s��2R�wȸ>xֽ�ۦ~ۉ�_��z�9SWeV�WӼ�U�3�#C�d�F@�Q�������4����ɉl�=4L��Mݦ3m7�AQ(0�����9N�� ��B[�{b��O>���RX���� X��      �   g   x���v
Q���W((M��L�+-N-*��/JO�ˬJ,���K̉/��,)Vs�	uV�0�Q0Դ��$K�%��)�lB�f���(��|�@?Sb3E�M���� Z:�,      �   \   x���v
Q���W((M��L�+-N-*�/(��JM.)Vs�	uV�0�Q0Դ��$Z���I� t�ILH� t�1�6����T�P�� ���      �   N   x���v
Q���W((M��L�+-N-*�/��I-Vs�	uV�0�Q0Դ��$N�����u��Wm��`T�� �89      �     x���]K�0@��+�6Wr��$��K)��{�������0��&o)ι���v���n��Η�����a����^��P��<�U��@�ʞ���e���O?_�ư�@l�pEOiwh���H{L@�+˲�	&s��N��)Y�yj]y���w3�~�? 1f�)�H�̺����?Đp���0���,�@U�\��ĺ���y~�&����u�u�� q�g��ֵ�n��HI����ui����a��[Y�4~}e�����Lo�(�w5     