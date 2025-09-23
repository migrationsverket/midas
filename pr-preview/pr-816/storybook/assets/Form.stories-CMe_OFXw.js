import{j as n}from"./iframe-CqqRRFTT.js";import{$ as j}from"./Form-Bcj5jnQ3.js";import{G}from"./Grid-74U3Ge98.js";import{G as e}from"./GridItem-Bzsuprh7.js";import{T as r}from"./TextField-DFg1ijvT.js";import{S as I}from"./Select-CoWyKcn1.js";import{B as a}from"./Button-BjNVoodo.js";import{R as g,a as b}from"./Radio-ELBTeG_k.js";import{C as h}from"./CheckboxGroup-BV-IQ6ma.js";import{C as k}from"./Checkbox-WEdOJsFg.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-ygEBsfuH.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CjNQbSUi.js";import"./useFocusRing-BrurhblR.js";import"./index-DAk3CCY1.js";import"./index-COLs0XuS.js";import"./TextFieldBase-D6WuqSGL.js";import"./TextField-H3m2zgmH.js";import"./FieldError-Djvrx598.js";import"./Text-Jo3tLCNQ.js";import"./Text-a_OWVaQT.js";import"./ListKeyboardDelegate-D0fx8wLZ.js";import"./SelectionManager-Dd7ReQGT.js";import"./useEvent-B0p0t61l.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BpqERJDz.js";import"./useDescription-5iWC-GMM.js";import"./useControlledState-COdh_jrB.js";import"./Group-Di4ma9Qf.js";import"./Input-BKw7zwqe.js";import"./Hidden-BVbALqcM.js";import"./Button-Kq9pdSfk.js";import"./useLabels-DCUPBKgC.js";import"./useButton-CvE-jl3X.js";import"./useTextField-Ca2mmQWR.js";import"./useField-D3GiTajm.js";import"./TextField.module-DjUItNl5.js";import"./Label-DMLR0Jje.js";import"./Dialog-f6s8PYyC.js";import"./RSPContexts-BpcO1Nsu.js";import"./OverlayArrow-CdnFMpDj.js";import"./useResizeObserver-C5WCATl_.js";import"./Collection-EKJ5r9Wg.js";import"./index-CR8iMyua.js";import"./Separator-Dn2lbCi0.js";import"./PressResponder-BGaGJmSs.js";import"./useLocalizedStringFormatter-DfTerQmH.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-D0mgvXI8.js";import"./Dialog-DIZ3oPY6.js";import"./useLocalizedStringFormatter-DjK0EsdO.js";import"./x-Bt5q2dFZ.js";import"./createLucideIcon-CGsn94Wv.js";import"./Heading-BBBOdU73.js";import"./info-BKSm6fHr.js";import"./Tag-DKu3qk6I.js";import"./ListBox-KF9z8dxI.js";import"./DragAndDrop-Bug8k3Zi.js";import"./inertValue-B9ZrrsKd.js";import"./useListState-DNesXqs8.js";import"./useHighlightSelectionDescription-DcYiVye0.js";import"./useUpdateEffect-3pnKUcPg.js";import"./useHasTabbableChild-DbRxLwFg.js";import"./check-BLh1YWgk.js";import"./ListBoxSection-aby_byFC.js";import"./Virtualizer-Cemiyfbc.js";import"./useObserveElement-Bu1npmzR.js";import"./chevron-down-eEsmgY4M.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-BEq2JDPN.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
