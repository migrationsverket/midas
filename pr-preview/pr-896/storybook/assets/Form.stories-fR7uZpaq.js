import{j as n}from"./iframe-DlHlAQJo.js";import{$ as j}from"./Form-CTMUSxEQ.js";import{G}from"./Grid-BIjeEueU.js";import{G as e}from"./GridItem-00pQY6sk.js";import{T as r}from"./TextField-BmaMgA0N.js";import{S as I}from"./Select-Bm42dd21.js";import{B as a}from"./Button-Dplqfzqs.js";import{R as g,a as b}from"./Radio-s_khxo46.js";import{C as h}from"./CheckboxGroup-BkKJ_Wey.js";import{C as k}from"./Checkbox-B6oiTRSU.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CoWnALh5.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CnM8W8KI.js";import"./useFocusRing-BNxWl82l.js";import"./index-Hhdo2DzF.js";import"./index-3FC3mL86.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DoO_z_Xg.js";import"./TextField-BwQ4ml_b.js";import"./FieldError-B9L2sEXX.js";import"./Text-DjXF8IrS.js";import"./Text-DI-KyHLK.js";import"./RSPContexts-BpBv_SqP.js";import"./Group-B4cohCec.js";import"./Input-CWOKX-ZF.js";import"./Hidden-2FK6M7Gy.js";import"./Button-DkbZ2U0v.js";import"./useLabels-DRdIFR70.js";import"./useButton-BhskPxTZ.js";import"./useTextField-D63tIxBC.js";import"./useControlledState-CP8W4iJo.js";import"./useField-Cg5n28E-.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-F-xYJiw-.js";import"./Dialog-CLBNYG_f.js";import"./OverlayArrow-Bqis-yDL.js";import"./useResizeObserver-DWbiO6-c.js";import"./Collection-C1ewVery.js";import"./index-BWyBxp6O.js";import"./Separator-D7WfDSc3.js";import"./SelectionManager-BchWopzT.js";import"./useEvent-BzpZPZBX.js";import"./scrollIntoView-CTulstBo.js";import"./SelectionIndicator-BQZiO3DZ.js";import"./useDescription-BECMIjY5.js";import"./ListKeyboardDelegate-DX2SiypI.js";import"./PressResponder-Dkr9iNPz.js";import"./useLocalizedStringFormatter-DMlIe0Bc.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-DnIYQ2wY.js";import"./VisuallyHidden-CeP5OQxk.js";import"./useLocalizedStringFormatter-CFGvHDvR.js";import"./x-C5abKpL8.js";import"./createLucideIcon-DpIge4kZ.js";import"./Heading-iIyfblUn.js";import"./info-CBEDUFY_.js";import"./Popover-BRCV5j0q.js";import"./Tag-D-ehpRdZ.js";import"./ListBox-Bjokomiq.js";import"./DragAndDrop-C-SUtggM.js";import"./inertValue-CUAnUem6.js";import"./useListState-DTvkwJDp.js";import"./useHighlightSelectionDescription-COiuBJgA.js";import"./useUpdateEffect-DXua_5W4.js";import"./useHasTabbableChild-WAwnWuN6.js";import"./check-DDUBCGUB.js";import"./ListBoxSection-C15oIyRg.js";import"./Virtualizer-CRC7-WTw.js";import"./chevron-down-DZroN0cq.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-BSo77VUX.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
