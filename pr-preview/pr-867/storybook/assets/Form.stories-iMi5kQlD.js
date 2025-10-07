import{j as n}from"./iframe-DA2QP2gZ.js";import{$ as j}from"./Form-DQu36sbZ.js";import{G}from"./Grid-irX4d0Lj.js";import{G as e}from"./GridItem-BvfymFgD.js";import{T as r}from"./TextField-DC0xG2cf.js";import{S as I}from"./Select-B8p2ZHlv.js";import{B as a}from"./Button-DPwrfeeA.js";import{R as g,a as b}from"./Radio-CSCpREnq.js";import{C as h}from"./CheckboxGroup-B2VxrorP.js";import{C as k}from"./Checkbox-CxMX_ONt.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-B4V3ufOL.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B8I3uOOL.js";import"./useFocusRing-FuIjM7JQ.js";import"./index-7aBtRAey.js";import"./index-DhHNJUsG.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DVj9pC8u.js";import"./TextField-BbIJ7bW_.js";import"./FieldError-Bmo7wbyN.js";import"./Text-_n6topwj.js";import"./Text-BkyodOFL.js";import"./context-hprZxKSG.js";import"./SelectionManager-DACDS8-5.js";import"./useEvent-CzG6qI3t.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-aIgAoUSh.js";import"./useDescription-Cuns5jGH.js";import"./useControlledState-dGEuBejq.js";import"./Group-CkumCzQv.js";import"./Input-DSJZ6Kdw.js";import"./Hidden-CMB0igjM.js";import"./Button-CDuPEANU.js";import"./useLabels-OZSYNOQS.js";import"./useButton-BngaAYXs.js";import"./useTextField-iQHtVtS0.js";import"./useField-2wOWyc-x.js";import"./TextField.module-DjUItNl5.js";import"./Label-CWnUxa_D.js";import"./Dialog-D-k0FEpo.js";import"./RSPContexts-CY5bXe8R.js";import"./OverlayArrow-BTOU6YJF.js";import"./useResizeObserver-zDsPyd_E.js";import"./Collection-BBzArCaz.js";import"./index-BwBGH6_G.js";import"./Separator-D4Ownr1m.js";import"./PressResponder-Cgvm42nV.js";import"./useLocalizedStringFormatter-tbzCVLLU.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BoocAoPE.js";import"./useLocalizedStringFormatter-BlL8HcZJ.js";import"./x-DEcX4A1J.js";import"./createLucideIcon-DMeWvDhb.js";import"./Heading-Pv83APoL.js";import"./info-Cbx-wqdR.js";import"./Popover-CyJ9vtjW.js";import"./Tag-vBbpHdKT.js";import"./ListBox-EL9XJLRL.js";import"./DragAndDrop-Ce_r6_uv.js";import"./inertValue-CsZJmqff.js";import"./useListState-BRQJa7Qm.js";import"./useHighlightSelectionDescription-CGnW_68N.js";import"./useUpdateEffect-D3VIP8Nx.js";import"./useHasTabbableChild-ClCcIRae.js";import"./check-BJ6xo4bL.js";import"./ListBoxSection-BjoNpBED.js";import"./Virtualizer-orQnnfXg.js";import"./useObserveElement-Dugf-ini.js";import"./chevron-down-BDYeSjC4.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-D_5uH5YG.js";const wn={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
