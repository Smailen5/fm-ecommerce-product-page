/**
 * @file Loading.tsx
 * @description Generic loading component with customizable message
 */

/**
 * @interface LoadingProps
 */
interface LoadingProps {
  loadingName?: string;
}

/**
 * Loading component
 * @component
 * @description Displays a loading message within the main layout. Can be customized with specific loading context.
 *
 * @example
 * ```tsx
 * <Loading loadingName="documentation" /> // Shows "Loading documentation..."
 * <Loading /> // Shows "Loading..."
 * ```
 *
 * @param {LoadingProps} props - Component props
 * @param {string} [props.loadingName] - Optional text to append to "Loading" message
 * @returns {JSX.Element} A loading message within the main layout
 */
const Loading = ({ loadingName }: LoadingProps) => {
  return (
    <div className="flex h-72 w-full items-center justify-center p-4 text-center">
      Loading{loadingName ? ` ${loadingName}` : ""}...
    </div>
  );
};

export default Loading;
