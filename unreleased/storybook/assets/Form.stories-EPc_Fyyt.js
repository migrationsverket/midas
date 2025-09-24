import{j as n}from"./iframe-B1lvOxX1.js";import{$ as j}from"./Form-BDV4kaRe.js";import{G}from"./Grid-qeZ6hL_e.js";import{G as e}from"./GridItem-CHiqi1Q2.js";import{T as r}from"./TextField-BFA_Nmpa.js";import{S as I}from"./Select-D_PhE4Wa.js";import{B as a}from"./Button-CEPzk3-8.js";import{R as g,a as b}from"./Radio-e-d9LrOU.js";import{C as h}from"./CheckboxGroup-DUaBPtLS.js";import{C as k}from"./Checkbox-Kzust9qC.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-z_r7fcwV.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Ch31VyoL.js";import"./useFocusRing-DXk37t0a.js";import"./index-tbZqbgaQ.js";import"./index-C1e1SWCw.js";import"./TextFieldBase-BFfiLb5E.js";import"./TextField-CwxcfWfa.js";import"./FieldError-AVPRBuYQ.js";import"./Text-sZcQZdom.js";import"./Text-eLteibpK.js";import"./ListKeyboardDelegate-CC0f9Wmv.js";import"./SelectionManager-CEWWmFVV.js";import"./useEvent-Wqprcczi.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-UYt8mone.js";import"./useDescription-B-kShsCV.js";import"./useControlledState-CG9-lb0l.js";import"./Group-Dw0FTof0.js";import"./Input-BHeNOOrv.js";import"./Hidden-C35oNc3L.js";import"./Button-Mj_eDvTo.js";import"./useLabels-Cmg0wvDO.js";import"./useButton-DdZxV86M.js";import"./useTextField-j-2EqI36.js";import"./useField-uVllYp9J.js";import"./TextField.module-DjUItNl5.js";import"./Label-CQrL5i-U.js";import"./Dialog-3Bdl0TW1.js";import"./RSPContexts-BVTkFbgV.js";import"./OverlayArrow-BQcG2Lkw.js";import"./useResizeObserver-CG4P93PX.js";import"./Collection-BdokA4jQ.js";import"./index-DPxkPoun.js";import"./Separator-DmPNhsou.js";import"./PressResponder-CfuagV8P.js";import"./useLocalizedStringFormatter-C9NGP74T.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BsIGocNB.js";import"./Dialog-B2G84UVl.js";import"./useLocalizedStringFormatter-BAwQArJO.js";import"./x-CR14hot0.js";import"./createLucideIcon-iechpHkF.js";import"./Heading-BaE8ARl_.js";import"./info-Dqpyp7cN.js";import"./Tag-YNvnXkgq.js";import"./ListBox-Cl7ahvLw.js";import"./DragAndDrop-D0gFcQpi.js";import"./inertValue-C3Xrl6Fm.js";import"./useListState-CTlmIwKb.js";import"./useHighlightSelectionDescription-WGUw16Px.js";import"./useUpdateEffect-C6QMzD1k.js";import"./useHasTabbableChild-D9dL513F.js";import"./check-dgRK7vkj.js";import"./ListBoxSection-B6aRynqv.js";import"./Virtualizer-qqcFvPJj.js";import"./useObserveElement-BQPJAvs6.js";import"./chevron-down-BJW1bBs7.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-BUoC9U5D.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
