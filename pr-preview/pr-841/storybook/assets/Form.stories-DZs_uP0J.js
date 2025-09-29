import{j as n}from"./iframe-D1LD4Tks.js";import{$ as j}from"./Form-DJo4qK4C.js";import{G}from"./Grid-xIplNdzu.js";import{G as e}from"./GridItem-C7JCznoD.js";import{T as r}from"./TextField-Bzo3UezQ.js";import{S as I}from"./Select-Ddw-wEyz.js";import{B as a}from"./Button-jc0CXsSm.js";import{R as g,a as b}from"./Radio-Cbo5yAsm.js";import{C as h}from"./CheckboxGroup-DrXue8dj.js";import{C as k}from"./Checkbox-Oe7j0eS9.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-JoROItjW.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CbVadSTV.js";import"./useFocusRing-CgW2W6o7.js";import"./index-Bs1cGQij.js";import"./index-DLH4JUrF.js";import"./TextFieldBase-CRP3B3Ma.js";import"./TextField-DR70VJnO.js";import"./FieldError-il1MyRj-.js";import"./Text-BCb06VbB.js";import"./Text-BSlxiuvo.js";import"./context-CBf5zn_m.js";import"./SelectionManager-Cg6qZf9S.js";import"./useEvent-DQ8m34bj.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-6y4D1TG2.js";import"./useDescription-CuA-8Wlr.js";import"./useControlledState-B3j8a0F9.js";import"./Group-DlIkFEwg.js";import"./Input-CGj5YitR.js";import"./Hidden-DdrKESqT.js";import"./Button-DPahIHgQ.js";import"./useLabels-BYpo9Rk4.js";import"./useButton-BIw3FYsh.js";import"./useTextField-BtVYUAVL.js";import"./useField-Dchs1eZ3.js";import"./TextField.module-DjUItNl5.js";import"./Label-D2ShV1CP.js";import"./Dialog-Dd6irJ6H.js";import"./RSPContexts-BIBk1vsg.js";import"./OverlayArrow-C5nImBAD.js";import"./useResizeObserver-zic1dSVr.js";import"./Collection-CwdKwyKK.js";import"./index-DoB3bCvi.js";import"./Separator-Cgo93Nkb.js";import"./PressResponder-DuPTbSno.js";import"./useLocalizedStringFormatter-ZYu45CT_.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-SPeBUPGA.js";import"./useLocalizedStringFormatter-B47t5_2y.js";import"./x-De2ZsV_g.js";import"./createLucideIcon-DRJ6nCYn.js";import"./Heading-C3c2_G2m.js";import"./info-Hn-aMrcL.js";import"./Popover-kICF8knd.js";import"./Tag-YDA68X8Z.js";import"./ListBox-CtPW6jkK.js";import"./DragAndDrop-BMT99FOZ.js";import"./inertValue-BwzqUfOz.js";import"./useListState-CQUqo6Za.js";import"./useHighlightSelectionDescription-CxImDdid.js";import"./useUpdateEffect-CKeQkIIq.js";import"./useHasTabbableChild-DHp2DaCQ.js";import"./check-CX-RrhaW.js";import"./ListBoxSection-Bxv0O71F.js";import"./Virtualizer-DNIfWx6x.js";import"./useObserveElement-st82q7h6.js";import"./chevron-down-DxPWcAxX.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-oJl0UvmM.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
