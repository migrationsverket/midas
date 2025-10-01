import{j as n}from"./iframe-BS8k6GJT.js";import{$ as j}from"./Form-D7zyi0IW.js";import{G}from"./Grid-BecRG0zU.js";import{G as e}from"./GridItem-BIdcBcuC.js";import{T as r}from"./TextField-1RHkXsqy.js";import{S as I}from"./Select-s_mjxcyj.js";import{B as a}from"./Button-Dyoq_HiH.js";import{R as g,a as b}from"./Radio-CrqnYlKD.js";import{C as h}from"./CheckboxGroup-DESQ1qa-.js";import{C as k}from"./Checkbox-CNOWb4d5.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-Cjg4EhUW.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BHOMrLNg.js";import"./useFocusRing-CLE6NKoQ.js";import"./index-BAGrBU-R.js";import"./index-DHV-9xE6.js";import"./TextFieldBase-CVV8i0YJ.js";import"./TextField-Cwca4M_5.js";import"./FieldError-BwqSWc0n.js";import"./Text-DIYgl6aV.js";import"./Text-DAqioqo7.js";import"./context-BFcIpQPF.js";import"./SelectionManager-BWevWy6X.js";import"./useEvent--OBkwZ2e.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-B-vJboU2.js";import"./useDescription-E5tbc17N.js";import"./useControlledState-DaaX2bZU.js";import"./Group-DJownhP6.js";import"./Input-jiztfdzz.js";import"./Hidden-BRplMcK9.js";import"./Button-D1kQSpF4.js";import"./useLabels-BfXhbUoh.js";import"./useButton-DNSxgy0Q.js";import"./useTextField-DUzXkUtF.js";import"./useField-99XM0jLU.js";import"./TextField.module-DjUItNl5.js";import"./Label-Bc8fq8hq.js";import"./Dialog-DtsSEYMG.js";import"./RSPContexts-D5k1Cqyq.js";import"./OverlayArrow-Dt4ZGzHJ.js";import"./useResizeObserver-Ddr8iDJg.js";import"./Collection-Co5xEZk-.js";import"./index-Bi1ka4TO.js";import"./Separator-7Y92xqha.js";import"./PressResponder-X1dI_AfQ.js";import"./useLocalizedStringFormatter-CLjxu96y.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-Dqv3aJPH.js";import"./useLocalizedStringFormatter-aLazAfdz.js";import"./x-BtCjRXdp.js";import"./createLucideIcon-BfOaotPg.js";import"./Heading-CYBZfPbU.js";import"./info-BLXauIku.js";import"./Popover-DXhMGnZf.js";import"./Tag-BUT-maWQ.js";import"./ListBox-B7RYQ1eb.js";import"./DragAndDrop-DH5zR4vw.js";import"./inertValue--J8jY3_T.js";import"./useListState-CwloI40m.js";import"./useHighlightSelectionDescription-rqJiCzuW.js";import"./useUpdateEffect-C00qUJYz.js";import"./useHasTabbableChild-BVe2OaWa.js";import"./check-BAS21-H1.js";import"./ListBoxSection-CmkzVhmu.js";import"./Virtualizer-OiaEdrYo.js";import"./useObserveElement-Xzn1ekeB.js";import"./chevron-down-DdhNLnOT.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-BxkKZF5s.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['Banan', 'Apple', 'Mango'];
    return <Grid>
        <GridItem size={12}>
          <TextField label='Ange ditt fullständiga namn' description='Glöm inte dina eventuella mellannamn!' />
        </GridItem>
        <GridItem size={12}>
          <TextField label='Personnummmer' description='Anges på formen ÅÅMMDD-XXXX' />
        </GridItem>
        <GridItem size={12}>
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' options={ITEMS.map(i => ({
          id: i,
          name: i
        }))} />
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...(p=(l=m.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,x,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['A', 'B', 'C'];
    const RADIOITEMS = ['Anledning A', 'Anledning B', 'Anledning C'];
    return <div>
        <Grid>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <RadioGroup label='Anledning' description='Ange anledning till att du söker i databasen'>
              {RADIOITEMS.map((item: string) => <Radio value={item} key={item}>
                  {item}
                </Radio>)}
            </RadioGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <CheckboxGroup label='Databas' description='Välj databas att söka i'>
              {ITEMS.map((item: string) => <Checkbox value={item} key={item}>
                  {item}
                </Checkbox>)}
            </CheckboxGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Namn' description='' />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Personnummer' />
          </GridItem>

          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' options={ITEMS.map(i => ({
            name: i,
            id: i
          }))} />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Ärendekod' />
          </GridItem>

          <GridItem size='auto'>
            <Button>Sök</Button>
          </GridItem>
          <GridItem size='auto'>
            <Button variant='secondary'>Rensa</Button>
          </GridItem>
        </Grid>
      </div>;
  }
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const wn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,wn as __namedExportsOrder,$n as default};
