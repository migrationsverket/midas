import{j as n}from"./iframe-DzJ_VHqL.js";import{$ as j}from"./Form-CwcZmOn8.js";import{G}from"./Grid-DTSYm2ZA.js";import{G as e}from"./GridItem-B64qtJ1Y.js";import{T as r}from"./TextField-B7wNVC3e.js";import{S as I}from"./Select-DwX7zCV7.js";import{B as a}from"./Button-BRKMaoGh.js";import{R as g,a as b}from"./Radio-GF7tv-Fp.js";import{C as h}from"./CheckboxGroup-C2usw5SU.js";import{C as k}from"./Checkbox-Ubqsp6Fo.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-Dc7aqk5n.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-5TqosLy9.js";import"./useFocusRing-ov0wUtoy.js";import"./index-BdMeSNVy.js";import"./index-Bg7tArcw.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CC87McRc.js";import"./TextField-C0G0k52J.js";import"./FieldError-CAPnUKWu.js";import"./Text-DvtKvFOU.js";import"./Text-EeQ3__I4.js";import"./context-CCS_8Xa3.js";import"./SelectionManager-CWBYKFBE.js";import"./useEvent-D-PK61S9.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-C-F2lppL.js";import"./useDescription-sw1rETAj.js";import"./useControlledState-BNnwpJBg.js";import"./Group-fMwgL5rd.js";import"./Input-B13mTL-L.js";import"./Hidden-DPpD6W0V.js";import"./Button-Dqaqm8iD.js";import"./useLabels-ZQu4DjEm.js";import"./useButton-D_S1A397.js";import"./useTextField-D9D2Fv2q.js";import"./useField-HHRIq82j.js";import"./TextField.module-DjUItNl5.js";import"./Label-FD8sK9TX.js";import"./Dialog-UrDb09id.js";import"./RSPContexts-BZ7s7WHa.js";import"./OverlayArrow-CtnxNe_Q.js";import"./useResizeObserver-Bd3Aqcoa.js";import"./Collection-DD5Kca19.js";import"./index-CJud6AVB.js";import"./Separator-Cnx9JVDZ.js";import"./PressResponder-DO7MvZwH.js";import"./useLocalizedStringFormatter-BabxDlti.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DojKmRhV.js";import"./useLocalizedStringFormatter-ClsCEPo0.js";import"./x-DczP4Bad.js";import"./createLucideIcon-BIb5Wuzx.js";import"./Heading-BE-Tdl00.js";import"./info-DlgSYEiQ.js";import"./Popover-Cpz3SorA.js";import"./Tag-C8AZklrR.js";import"./ListBox-DGIzeenS.js";import"./DragAndDrop--gr5knCN.js";import"./inertValue-BWOrq5KW.js";import"./useListState-1jS016Os.js";import"./useHighlightSelectionDescription-C7rNwIc4.js";import"./useUpdateEffect-C6P2Yq1Y.js";import"./useHasTabbableChild-BBNC8aeY.js";import"./check-YzBhcik7.js";import"./ListBoxSection-BU65VVMj.js";import"./Virtualizer-FpPwo72g.js";import"./useObserveElement-CLRPBlBH.js";import"./chevron-down-9ExlUr4G.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-d6kSc4pG.js";const wn={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
