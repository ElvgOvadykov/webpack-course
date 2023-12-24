import path from 'path';
import webpack from 'webpack';
import { buildWebpack } from './config/build/buildWebpack';
import { BuildOptions, BuildPaths } from './config/build/types/types';

type TMode = 'production' | 'development';

export default (env: BuildOptions) => {
  const paths: BuildPaths = {
    output: path.resolve(__dirname, 'dist'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths,
    analyzer: env.analyzer,
    platform: env.platform ?? 'desktop',
  });

  return config;
};
