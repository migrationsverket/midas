import{j as e}from"./iframe-GzN0VSzx.js";import{$ as c}from"./Form-BMjB8i_m.js";import{G as d}from"./Grid-BRrD5W7o.js";import{G as i}from"./GridItem-CPOffxVh.js";import{a as x,R as u}from"./Radio-Cxaskg9j.js";import{C as I}from"./CheckboxGroup-Cjh6QyGB.js";import{C as G}from"./Checkbox-B8Q3CKcj.js";import{T as t}from"./TextField-BV_Bpl6H.js";import{S as l}from"./Select-CjASGklj.js";import{L as p}from"./ListBoxItem-CflKpKD1.js";import{B as a}from"./Button-BcwNb2j2.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-dcWRHMqA.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-doFWEBdr.js";import"./useFocusRing-BT84Sj0b.js";import"./index-BtUmmQ1y.js";import"./index-DkoMqfON.js";import"./clsx-Ciqy0D92.js";import"./Group-N7BZsRgt.js";import"./FieldError-DXzy-Fs_.js";import"./Text-BytI2fT-.js";import"./Text-DW2oSw1u.js";import"./Button-B9ouc3Vz.js";import"./Hidden-BiK8gQF-.js";import"./useLabels-8wBAXN0N.js";import"./useButton-BJTX_GMM.js";import"./SelectionIndicator-BPUPbomw.js";import"./useField-DN3tkGHh.js";import"./VisuallyHidden-Bf3adftS.js";import"./useControlledState-CFkZ7Ywi.js";import"./Label-CXQZZd10.js";import"./Dialog-BB0cbBWM.js";import"./RSPContexts-DntI5H5m.js";import"./OverlayArrow-B4Mvj34m.js";import"./useResizeObserver-DzkMjZLw.js";import"./Collection-DlB3NQT_.js";import"./index-CD7Lnybu.js";import"./Separator-CAURjAbf.js";import"./SelectionManager-yF3l3XTv.js";import"./useEvent-kmBIgIh4.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DH1k0dXL.js";import"./ListKeyboardDelegate-tH97EUPf.js";import"./PressResponder-Bqn7NlWU.js";import"./useLocalizedStringFormatter-CkwJfZLX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Ti5FQfNt.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-BypicB4y.js";import"./createLucideIcon-KJI_USZY.js";import"./useLocalizedStringFormatter-9sMeAIfj.js";import"./Heading-qWubh4fZ.js";import"./info-BwCMCLwi.js";import"./Popover-CDfA2okm.js";import"./check--HQmsiyh.js";import"./useToggleState-DjnvG65b.js";import"./TextFieldBase-Btho7W53.js";import"./TextField-BaQGYUvK.js";import"./Input-YqloyaF5.js";import"./useTextField-6IsDM_1S.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-0-YnAItl.js";import"./DragAndDrop-BEsxf6VQ.js";import"./inertValue-CBpSz37g.js";import"./useListState-DWxL2-hQ.js";import"./Tag-BBuKHrVh.js";import"./useHighlightSelectionDescription-DOhM5CXP.js";import"./useUpdateEffect-BDqyLm7y.js";import"./useHasTabbableChild-CXCyCxCK.js";import"./chevron-down-DqL6TQq4.js";import"./Virtualizer-BEKsys5Z.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const ye=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,ye as __namedExportsOrder,Le as default};
