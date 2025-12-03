import{j as e}from"./iframe-DzpGAGRs.js";import{$ as c}from"./Form-kiC6Xfma.js";import{G as d}from"./Grid-DmbYlvoZ.js";import{G as i}from"./GridItem-CZ8PL62e.js";import{T as t}from"./TextField-B_CVZi3n.js";import{S as l}from"./Select-Bamw2qmH.js";import{B as a}from"./Button-zwkBBH84.js";import{R as x,a as u}from"./Radio-Et9D2hJr.js";import{C as I}from"./CheckboxGroup-CIqMVstF.js";import{C as G}from"./Checkbox-n3dZH415.js";import{L as p}from"./ListBoxItem-BtLixmoF.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DhQZEy20.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CoLbxmFl.js";import"./useFocusRing-CBMZ-ulq.js";import"./index-RZDpPbNi.js";import"./index-COvdJqzc.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-6hCX0SjS.js";import"./TextField-CRjSRq6K.js";import"./FieldError-BJ6H7Ap3.js";import"./Text-DzINHNBQ.js";import"./Text-BciY5Tjq.js";import"./RSPContexts-Dqik0rA0.js";import"./Group-rz96SSnl.js";import"./Input-BO-DO8zt.js";import"./Hidden-BamiLY6w.js";import"./Button-DhsqVPF-.js";import"./useLabels-CnU9ekD0.js";import"./useButton-DgcuQT2f.js";import"./useTextField-B2llEpVF.js";import"./useControlledState-Cd4ZWdr1.js";import"./useField-CDhzWcTA.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-yvUHoT_l.js";import"./Dialog-x_tPqD_g.js";import"./OverlayArrow-CxKtVg1H.js";import"./useResizeObserver-DhqDyjeF.js";import"./Collection-CfCyruHm.js";import"./index-CPNUj5zQ.js";import"./Separator-DXYgY4tL.js";import"./SelectionManager-yKB6RIVq.js";import"./useEvent-CFsLuxvR.js";import"./scrollIntoView-J6xnNcxw.js";import"./SelectionIndicator-WJ1Ng6sH.js";import"./useDescription-_6Itm5b2.js";import"./ListKeyboardDelegate-C2T8--ZF.js";import"./PressResponder-B8bj9uGX.js";import"./useLocalizedStringFormatter-Chv8IKjN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DkDG2Qlb.js";import"./VisuallyHidden-Bu_FxHbl.js";import"./x-oOrzlPsL.js";import"./createLucideIcon-BvhlWCmI.js";import"./useLocalizedStringFormatter-DclIrRz1.js";import"./Heading-CYq4rErI.js";import"./info-CYt-BXip.js";import"./Popover-Cup6NCRB.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CpSsDNDd.js";import"./DragAndDrop-CLUNIyyt.js";import"./inertValue-DtqzdX0C.js";import"./useListState-BXmgKXX6.js";import"./Tag-Dc87jXM_.js";import"./useHighlightSelectionDescription-CV5M4duW.js";import"./useUpdateEffect-DdSbS6-G.js";import"./useHasTabbableChild-DWK5uY7K.js";import"./chevron-down-BsxvFW-r.js";import"./Button.module-Co5e5YHp.js";import"./check-oOyuTTUK.js";import"./useToggleState-DdBpiNhE.js";import"./Virtualizer-DznqQ1YD.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' items={ITEMS.map(i => ({
          id: i,
          name: i
        }))}>
            {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
          </Select>
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' items={ITEMS.map(i => ({
            name: i,
            id: i
          }))}>
              {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
            </Select>
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
}`,...s.parameters?.docs?.source}}};const Le=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Le as __namedExportsOrder,Xe as default};
