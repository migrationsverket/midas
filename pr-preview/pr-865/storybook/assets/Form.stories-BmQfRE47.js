import{j as n}from"./iframe-Be0g_aJO.js";import{$ as j}from"./Form-D86f2bAM.js";import{G}from"./Grid-CzSwayYP.js";import{G as e}from"./GridItem-C6XgdDsH.js";import{T as r}from"./TextField-Cx6ykCRk.js";import{S as I}from"./Select-Ch3BKEeY.js";import{B as a}from"./Button-WxyWdEj2.js";import{R as g,a as b}from"./Radio-DF-7V3Or.js";import{C as h}from"./CheckboxGroup-Cge5izNZ.js";import{C as k}from"./Checkbox-D027XMv_.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-ddu2LZsb.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-kksduhUS.js";import"./useFocusRing-COr-n7Fx.js";import"./index-B0KwozC5.js";import"./index-BSeW_fek.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Dh5As-tq.js";import"./TextField-DygM_JQB.js";import"./FieldError-eyb4PAz4.js";import"./Text-jDSViAJL.js";import"./Text-Bvq6LOwS.js";import"./context-ByoCaOpE.js";import"./SelectionManager-CSS2hxya.js";import"./useEvent-CbUSRY16.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-FB6QrrYs.js";import"./useDescription-3LzBmV9x.js";import"./useControlledState-B9P4hSlN.js";import"./Group-Bb_HTnDq.js";import"./Input-C0NeI8wK.js";import"./Hidden-DfyZdMIn.js";import"./Button-D8MC8HcS.js";import"./useLabels-COtLsp3_.js";import"./useButton-C8AwPNN5.js";import"./useTextField-C05gcHD6.js";import"./useField-dMHmgJSJ.js";import"./TextField.module-DjUItNl5.js";import"./Label-DoEGnn3O.js";import"./Dialog-CXFEuHLP.js";import"./RSPContexts-PBwx02cj.js";import"./OverlayArrow-Dl_hd0xa.js";import"./useResizeObserver-C8C8tDRZ.js";import"./Collection-DxAMUbA5.js";import"./index-DKUZCSA8.js";import"./Separator-BK9Lsf_o.js";import"./PressResponder-Doroa6PV.js";import"./useLocalizedStringFormatter-D8VSbuPC.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-zms1DDcC.js";import"./useLocalizedStringFormatter-CsXzxHpG.js";import"./x-BYUcNGG5.js";import"./createLucideIcon-DknQS7n1.js";import"./Heading-D1RR6dcO.js";import"./info-CpI4jAjB.js";import"./Popover-CWdRWm-x.js";import"./Tag-CLOMke54.js";import"./ListBox-CxKOf7SC.js";import"./DragAndDrop-Du078LmE.js";import"./inertValue-DN4Y6d6Q.js";import"./useListState-GL-ISBOY.js";import"./useHighlightSelectionDescription-CLSCsk2i.js";import"./useUpdateEffect-Dz11lOr7.js";import"./useHasTabbableChild-B5oUgw1i.js";import"./check-DUrTc3YC.js";import"./ListBoxSection-BCtFVf1a.js";import"./Virtualizer-BOb78SUi.js";import"./useObserveElement-DYreflg-.js";import"./chevron-down-D3nRVFCl.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-CFbf__RC.js";const wn={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
