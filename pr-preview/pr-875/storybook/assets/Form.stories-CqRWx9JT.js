import{j as n}from"./iframe-D7PLAgGU.js";import{$ as j}from"./Form-DIardNGo.js";import{G}from"./Grid-6QyGq_Yi.js";import{G as e}from"./GridItem-DiO-6D-2.js";import{T as r}from"./TextField-DVUbINjp.js";import{S as I}from"./Select-DVxB7-O8.js";import{B as a}from"./Button-48IheeSP.js";import{R as g,a as b}from"./Radio-DaMKAJ-J.js";import{C as h}from"./CheckboxGroup-DFuv5Flb.js";import{C as k}from"./Checkbox-BJu_rzrH.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-aIebjbgy.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DgBO4pBm.js";import"./useFocusRing-BuzUNA5k.js";import"./index-D9J6_FRt.js";import"./index-C6NZvTHP.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-D6LGH76m.js";import"./TextField-DijW87DA.js";import"./FieldError-CexIVZgw.js";import"./Text-BBegSRqI.js";import"./Text-DU1vH3on.js";import"./context-BV_XnGuB.js";import"./SelectionManager-JBrfQvij.js";import"./useEvent-0pT33JR4.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DH07zdFN.js";import"./useDescription-D3o5iGFo.js";import"./useControlledState-BA4q7GDN.js";import"./Group-DKHkZ1f9.js";import"./Input-BXcfrxUo.js";import"./Hidden-ConWhrU8.js";import"./Button-BebYfKlO.js";import"./useLabels-CQtNXEv-.js";import"./useButton-Dxc-XQKJ.js";import"./useTextField-DOdwwpQ2.js";import"./useField-SJcHfh-o.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-BVkSohuF.js";import"./Dialog-DdejnTRO.js";import"./RSPContexts-Bd8y0Ymz.js";import"./OverlayArrow-BeHSBWyG.js";import"./useResizeObserver-oDyKRHxu.js";import"./Collection-D4cMIDzF.js";import"./index-CqdprUPF.js";import"./Separator-CgL5QrZW.js";import"./PressResponder-q_CcW5_B.js";import"./useLocalizedStringFormatter-CQGY_8nr.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BMnPZRic.js";import"./useLocalizedStringFormatter-DZ0bcPXp.js";import"./x-CSY_FO_W.js";import"./createLucideIcon-DAAdvmaL.js";import"./Heading-CMl5gqzu.js";import"./info-DGdotdXr.js";import"./Popover-DOxrywif.js";import"./Tag-CjtWWDoU.js";import"./ListBox-MGKfgsx9.js";import"./DragAndDrop-BrFGCgBT.js";import"./inertValue-BardcSDq.js";import"./useListState-CnaNbX5U.js";import"./useHighlightSelectionDescription-CQWYpuXO.js";import"./useUpdateEffect-BE4-zNtR.js";import"./useHasTabbableChild-D0EOPijc.js";import"./check-DHd4CTZm.js";import"./ListBoxSection-BuEa7Q3_.js";import"./Virtualizer-CAw58bty.js";import"./useObserveElement-CDeTySuG.js";import"./chevron-down-lV0esE1-.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-ORC35lxj.js";const wn={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const Nn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,Nn as __namedExportsOrder,wn as default};
