import{j as n}from"./iframe-BGPycnHf.js";import{$ as j}from"./Form-CIP8klbV.js";import{G}from"./Grid-DiiL7IZv.js";import{G as e}from"./GridItem-Cl61xERL.js";import{T as r}from"./TextField-C05Htvn_.js";import{S as I}from"./Select-9ncobiHh.js";import{B as a}from"./Button-COhbOtXy.js";import{R as g,a as b}from"./Radio-DeLlzIVa.js";import{C as h}from"./CheckboxGroup-8tmY8xwI.js";import{C as k}from"./Checkbox-6tzIThR4.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BOX0X8LU.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DNmjyZiR.js";import"./useFocusRing-o8_PlNoR.js";import"./index-BMM2fC0F.js";import"./index-Cq0t6jM0.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DMkw6puO.js";import"./TextField-C9eColvW.js";import"./FieldError-CG_5fcf5.js";import"./Text-BuO5k6im.js";import"./Text-BgOJCErY.js";import"./context-CHtlpFyY.js";import"./SelectionManager-DnZEOCNc.js";import"./useEvent-Ca-zEIoh.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-B3tz6rBt.js";import"./useDescription-DcWpSDNe.js";import"./useControlledState-p3ocYvxR.js";import"./Group-Em4nLvOW.js";import"./Input-8vc_B1-X.js";import"./Hidden-Us49cNbP.js";import"./Button-C71vjdbN.js";import"./useLabels-DPca-ubL.js";import"./useButton-CzmmvLdf.js";import"./useTextField-BdplgWmy.js";import"./useField-DsvgtN64.js";import"./TextField.module-GsDSmlca.js";import"./Label-Dagrg59z.js";import"./Dialog-D4Pj4MDC.js";import"./RSPContexts-D02BM0Cr.js";import"./OverlayArrow-CO_cX5PD.js";import"./useResizeObserver-MjPoh18U.js";import"./Collection-LeGTwjky.js";import"./index-Ddbd_Rp5.js";import"./Separator-aYAYKbv7.js";import"./PressResponder-gnx9iMyP.js";import"./useLocalizedStringFormatter-lGZHYR3R.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DTJTnyb2.js";import"./useLocalizedStringFormatter-sAV49HdL.js";import"./x-nYWipnlU.js";import"./createLucideIcon-LuAX6DXa.js";import"./Heading-BLUWfb1V.js";import"./info-C1g77VVJ.js";import"./Popover-CZP_IjK4.js";import"./Tag--C7J8cku.js";import"./ListBox-Ch8xShjc.js";import"./DragAndDrop-Cd8XsTJX.js";import"./inertValue-CmIkbLJC.js";import"./useListState-DM1d_0S7.js";import"./useHighlightSelectionDescription-BAbQA8OK.js";import"./useUpdateEffect-Cl1wzn88.js";import"./useHasTabbableChild-DrUMg6Lv.js";import"./check-Ca8FPiOW.js";import"./ListBoxSection-BO395v5h.js";import"./Virtualizer-D1f6027c.js";import"./useObserveElement-CQpxucIp.js";import"./chevron-down-_3lz7FrK.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-BV6yp4iA.js";const wn={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
