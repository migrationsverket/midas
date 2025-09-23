import{j as n}from"./iframe-BKfQqCJ-.js";import{$ as j}from"./Form-8TKpJtP2.js";import{G}from"./Grid-CO9cak8l.js";import{G as e}from"./GridItem-wRWn73Uk.js";import{T as r}from"./TextField-CtRbhBnh.js";import{S as I}from"./Select-B4hNgXo-.js";import{B as a}from"./Button-DxcKNOmO.js";import{R as g,a as b}from"./Radio-hlrsIFAA.js";import{C as h}from"./CheckboxGroup-CPfd0A6b.js";import{C as k}from"./Checkbox-Bjavx8VP.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-Cq_JvdRL.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-JJGvyuSC.js";import"./useFocusRing-Dfuc2Vp9.js";import"./index-DmPK7dVD.js";import"./index-Blt6LKFp.js";import"./TextFieldBase-84VAKUB2.js";import"./TextField-DUKE_y9m.js";import"./FieldError-BBXbYGyj.js";import"./Text-3-bLkHlZ.js";import"./Text-D0Qzv0ZP.js";import"./ListKeyboardDelegate-qOLm4ibK.js";import"./SelectionManager-DksGzdL9.js";import"./useEvent-DQ9P-b2j.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CEu85w4S.js";import"./useDescription-BlPwYZVf.js";import"./useControlledState-CgGm4NM9.js";import"./Group-BdPugUqH.js";import"./Input-DGOXIVPs.js";import"./Hidden-BnMgWm1R.js";import"./Button-BBmGPuy0.js";import"./useLabels-DtGPBlpw.js";import"./useButton-BOtP_vgu.js";import"./useTextField-C9v7MXxe.js";import"./useField-BRLSFBhF.js";import"./TextField.module-DjUItNl5.js";import"./Label-mtMbfQD-.js";import"./Dialog-CstCz4R-.js";import"./RSPContexts-Bl0wddGr.js";import"./OverlayArrow-DBKUPwHM.js";import"./useResizeObserver-GFvRcda2.js";import"./Collection-DZdBso4x.js";import"./index-DANWogtf.js";import"./Separator-DWaiJKJA.js";import"./PressResponder-BevLh8Zy.js";import"./useLocalizedStringFormatter-B9qe4_yB.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-8cGnBQM7.js";import"./Dialog-C_UppkQp.js";import"./useLocalizedStringFormatter-BvDglDFe.js";import"./x-BTmK_xeb.js";import"./createLucideIcon-DO94F0NE.js";import"./Heading-BYZDnejZ.js";import"./info-Cb2Gf2rS.js";import"./Tag-sSf7ID9R.js";import"./ListBox-BFoI0qLN.js";import"./DragAndDrop-CytvPNNJ.js";import"./inertValue-CIl7UYAx.js";import"./useListState-DUkgaorG.js";import"./useHighlightSelectionDescription-x-NspqcG.js";import"./useUpdateEffect-B9nKezd1.js";import"./useHasTabbableChild-CLR8t3AA.js";import"./check-BD6Anltx.js";import"./ListBoxSection-xcvwmZlL.js";import"./Virtualizer-C6ZF6Kyt.js";import"./useObserveElement-Cs5TZ1vV.js";import"./chevron-down-DEC848DI.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-Co6qfSot.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
