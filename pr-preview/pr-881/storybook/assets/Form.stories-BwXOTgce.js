import{j as n}from"./iframe-D-N7Ui17.js";import{$ as j}from"./Form-DAGiCTUL.js";import{G}from"./Grid-B_njg2si.js";import{G as e}from"./GridItem-Bf0t3le6.js";import{T as r}from"./TextField-9voajdLQ.js";import{S as I}from"./Select-oOgb11m7.js";import{B as a}from"./Button-BovEJxQ-.js";import{R as g,a as b}from"./Radio-CHYhB34L.js";import{C as h}from"./CheckboxGroup-BBpDW5mo.js";import{C as k}from"./Checkbox-DT0Bh1KT.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-dvkiLOTa.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CNARZ0s3.js";import"./useFocusRing-brrlMxBh.js";import"./index-DoW5xfD-.js";import"./index-CM1zSze_.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DHME7sVr.js";import"./TextField-BEH-cTgL.js";import"./FieldError-6q0wy2lg.js";import"./Text-DJ4v2uGC.js";import"./Text-BWVaM3bJ.js";import"./RSPContexts-DOCmYkUt.js";import"./Group-zhmdR80C.js";import"./Input-BP-3EhiN.js";import"./Hidden-BDzkT0o1.js";import"./Button-BArkA-Rt.js";import"./useLabels-BlZMB13Q.js";import"./useButton-WsOUO14H.js";import"./useTextField-By-6HdcD.js";import"./useControlledState-QjRZaw_8.js";import"./useField-Cg6cVwKH.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-B2Ps9VVJ.js";import"./Dialog-Bzb4mieZ.js";import"./OverlayArrow-DK8M4wEr.js";import"./useResizeObserver-BRf6LLrU.js";import"./Collection-BdZnIVMK.js";import"./index-Cop3NpJG.js";import"./Separator-DdSIOXKj.js";import"./SelectionManager-Dx05oU0B.js";import"./useEvent-Bbvf9CcZ.js";import"./scrollIntoView-nO8vtFUD.js";import"./SelectionIndicator-0ZUllF18.js";import"./useDescription-DNvkZWIo.js";import"./ListKeyboardDelegate-o8td4nOv.js";import"./PressResponder-DJf7GlBn.js";import"./useLocalizedStringFormatter-Dqp0okfg.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-BblEelMj.js";import"./VisuallyHidden-CBXkOk0s.js";import"./useLocalizedStringFormatter-Dr_TYV1S.js";import"./x-BdycwIv7.js";import"./createLucideIcon-OhzvPXq3.js";import"./Heading-C9i9XrbR.js";import"./info-BVxBZI6L.js";import"./Popover-BYE2jKPa.js";import"./Tag-B8x743OC.js";import"./ListBox-FYDE_meq.js";import"./DragAndDrop-DRaJKccf.js";import"./inertValue-BXJMDAKK.js";import"./useListState-DmijCrD3.js";import"./useHighlightSelectionDescription-Be6eP91a.js";import"./useUpdateEffect-zIq14_yo.js";import"./useHasTabbableChild-ByS8Nm8i.js";import"./check-B8qadaWi.js";import"./ListBoxSection-RECAgrsy.js";import"./Virtualizer-CIq4fO_i.js";import"./chevron-down-BfMsDWbt.js";import"./ListBoxPopover-CoSP9c1I.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-cuHx0b0v.js";const wn={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
