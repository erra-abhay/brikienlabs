import { Link, useRouteError } from 'react-router-dom';
import { Seo } from '../app/Seo';
import { Button } from '../shared/ui/Button';
import { Card, CardContent, CardDescription, CardTitle } from '../shared/ui/Card';

export function NotFoundPage() {
  const err = useRouteError();
  const message = err instanceof Error ? err.message : 'Page not found.';

  return (
    <div className="container-px py-16">
      <Seo title="Not found — BRIKIEN LABS" description="Page not found." path="/404" />
      <Card className="mx-auto max-w-xl">
        <CardContent>
          <CardTitle>dola em undadhu ekkada bokka 😎😎</CardTitle>
          <CardDescription className="mt-2">{message}</CardDescription>
          <div className="mt-6">
            <Link to="/">
              <Button>Go home</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

