import{j as n}from"./iframe-B8aIwmHN.js";import{$ as j}from"./Form-CSg-biMw.js";import{G}from"./Grid-D_QsCPXs.js";import{G as e}from"./GridItem-BjB3HAR_.js";import{T as r}from"./TextField-C7ZI8fHB.js";import{S as I}from"./Select-GCq9xcz5.js";import{B as a}from"./Button-DGd3qUEt.js";import{R as g,a as b}from"./Radio-svPPeUPO.js";import{C as h}from"./CheckboxGroup-zfG77mGi.js";import{C as k}from"./Checkbox-Ck0kEpY6.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BfdmU11Q.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B79zvZQ4.js";import"./useFocusRing-CN-1-ieR.js";import"./index-DlsqIy9f.js";import"./index-YN6msprJ.js";import"./TextFieldBase-DfsZVTkM.js";import"./TextField-D5d1myOL.js";import"./FieldError-Dbl4VYGk.js";import"./Text-BbciHNcX.js";import"./Text-AoYZPC0o.js";import"./ListKeyboardDelegate-x_1Yw91J.js";import"./SelectionManager-BgYn6k6D.js";import"./useEvent-UilzZBEc.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-Cj0ALx1i.js";import"./useDescription-D4aN1NG0.js";import"./useControlledState-CeFMXCNg.js";import"./Group-Bq04Ilyq.js";import"./Input-Cc73wKoo.js";import"./Hidden-BleYdXBN.js";import"./Button-Cu6HPWqt.js";import"./useLabels-YkI5BNL3.js";import"./useButton-31jAphpw.js";import"./useTextField-BLpELqsU.js";import"./useField-Ciukr31E.js";import"./TextField.module-DjUItNl5.js";import"./Label-CjMwp1sL.js";import"./Dialog-BS2p1Nvp.js";import"./RSPContexts-GxPU1WKy.js";import"./OverlayArrow-TppIYhJq.js";import"./useResizeObserver-yOHYFRAd.js";import"./Collection-Bq2tI38r.js";import"./index-BTsMEYAs.js";import"./Separator-Drj7D1wS.js";import"./PressResponder-GTEQWeJj.js";import"./useLocalizedStringFormatter-CCng53I0.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CzM7qpal.js";import"./Dialog-D-GUrXBO.js";import"./useLocalizedStringFormatter-CpAY4Vx0.js";import"./x-CtFSavwh.js";import"./createLucideIcon-D1lcM3of.js";import"./Heading-COzOKzUw.js";import"./info-DBkn_C4Q.js";import"./Tag-CpC5a5D2.js";import"./ListBox-CJ474WPJ.js";import"./DragAndDrop-Dp-lTMh1.js";import"./inertValue-as9kIEoc.js";import"./useListState-DylaHTyX.js";import"./useHighlightSelectionDescription-D-WJ1wHt.js";import"./useUpdateEffect-B6SWmSZK.js";import"./useHasTabbableChild-BWdBF31M.js";import"./check-CMHhjWg-.js";import"./ListBoxSection-CmHL0UMb.js";import"./Virtualizer-C3V7NeTA.js";import"./useObserveElement-WM5fjUgE.js";import"./chevron-down-CxhafZKF.js";import"./Button.module-okL0tbxC.js";import"./useToggleState-DNOYxnhi.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
