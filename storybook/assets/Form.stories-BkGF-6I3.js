import{j as n}from"./iframe-D2J9lQ-G.js";import{$ as j}from"./Form-Bn6rvoum.js";import{G}from"./Grid-BcmYEgvv.js";import{G as e}from"./GridItem-CH0YauZa.js";import{T as r}from"./TextField-IMB8axMP.js";import{S as I}from"./Select-nOi7LpQh.js";import{B as a}from"./Button-BOhfuY2j.js";import{R as g,a as b}from"./Radio-BtzPVKWZ.js";import{C as h}from"./CheckboxGroup-Co94Jvsk.js";import{C as k}from"./Checkbox-DB3HqBo9.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-xZHwKLAK.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-oxqWy4Yz.js";import"./useFocusRing-DPe83htM.js";import"./index-CPXZLqNA.js";import"./index-PV1JxFi-.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Buc5qDNU.js";import"./TextField-BDn1BrzH.js";import"./FieldError-WntdZ_D5.js";import"./Text-M7GV8OIY.js";import"./Text-DB-zk8bl.js";import"./context-CVa0HkLD.js";import"./SelectionManager-Dl8QRYIT.js";import"./useEvent-BdxqB2bT.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-KnTwGtwZ.js";import"./useDescription-FXuSZwId.js";import"./useControlledState-2UblfU9s.js";import"./Group--N5Q5DkV.js";import"./Input-CfTXGzj6.js";import"./Hidden-CVamZbnn.js";import"./Button-CR8Pggrs.js";import"./useLabels-CvW1B8gx.js";import"./useButton-CEfs-2nU.js";import"./useTextField-bmma3EGp.js";import"./useField-BVqP4DUL.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-QAySy1nT.js";import"./Dialog-BwaVbeXD.js";import"./RSPContexts-zSQD_47b.js";import"./OverlayArrow-BAvcXq19.js";import"./useResizeObserver-Bntvq9nn.js";import"./Collection-CZNNYJeG.js";import"./index-DTqd3Prn.js";import"./Separator-BpoZ6Sa3.js";import"./PressResponder-DkLWR-hO.js";import"./useLocalizedStringFormatter-AkDaVf3m.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BZJQizBj.js";import"./useLocalizedStringFormatter-DOXQaju0.js";import"./x-CcWeBwVO.js";import"./createLucideIcon-Be3A8vjT.js";import"./Heading-CJ0Wiu3A.js";import"./info-BsWQ3ZHd.js";import"./Popover-CrSnD7gg.js";import"./Tag-Cg4qZNpJ.js";import"./ListBox-Cg5inWF8.js";import"./DragAndDrop-D68EkHTP.js";import"./inertValue-BOyND0ew.js";import"./useListState-BAG2N38R.js";import"./useHighlightSelectionDescription-Cjs6BrmM.js";import"./useUpdateEffect-BCTlKWTx.js";import"./useHasTabbableChild-D6diqR20.js";import"./check-BvbPya-2.js";import"./ListBoxSection-COD5tjrV.js";import"./Virtualizer-Zas7tU2x.js";import"./useObserveElement-DC_G7I83.js";import"./chevron-down-m38mjtQ4.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-DcH07a51.js";const wn={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
