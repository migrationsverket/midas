import{j as e}from"./iframe-C_UZb0UH.js";import{$ as c}from"./Form-CYUJIrdr.js";import{G as d}from"./Grid-DIUzV93s.js";import{G as i}from"./GridItem-BNF8VXLz.js";import{a as x,R as u}from"./Radio-BEuu_iwI.js";import{C as I}from"./CheckboxGroup-CA1sz0HK.js";import{C as G}from"./Checkbox-BXr5A0pE.js";import{T as t}from"./TextField-1ZEBzPpb.js";import{S as l}from"./Select-ax77Khbl.js";import{L as p}from"./ListBoxItem-_fGaS9HJ.js";import{B as a}from"./Button-BjJn1zqZ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dtmguja_.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CTOGsIgy.js";import"./useFocusRing-wq3XW6c-.js";import"./index-wR3qBpGD.js";import"./index-Fx4upXIZ.js";import"./clsx-Ciqy0D92.js";import"./Group-C2L9hKQg.js";import"./FieldError-D3J2lHbG.js";import"./Text-AP-S6Ty1.js";import"./Text-CjhPc_0v.js";import"./Button-eLbcham7.js";import"./Hidden-BKqaL7Fi.js";import"./useLabels-BiEGdf9t.js";import"./useButton-WC7GcBqe.js";import"./SelectionIndicator-DOZU75KG.js";import"./useField-5YztNEa7.js";import"./VisuallyHidden--mkN2Z69.js";import"./useControlledState-BekthKbk.js";import"./Label-CkNt0W_g.js";import"./Dialog-BmWKRA9T.js";import"./RSPContexts-B5lp79pf.js";import"./OverlayArrow-DRDTdGBd.js";import"./useResizeObserver-R3UE-3dT.js";import"./Collection-00eAIKUn.js";import"./index-cLCQ2pnu.js";import"./Separator-C4nS5Ig_.js";import"./SelectionManager-DJjA2lCL.js";import"./useEvent-CZxhJAPd.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-D2LaqLM1.js";import"./ListKeyboardDelegate-BI-VV3g9.js";import"./PressResponder-Dw94lZ8y.js";import"./useLocalizedStringFormatter-DsjdFjoX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BhGadu9e.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-BVuIxQT0.js";import"./createLucideIcon-BfmkpqwG.js";import"./useLocalizedStringFormatter-DZJYQAWH.js";import"./Heading-BTY4QTZO.js";import"./info-CEzWrBrG.js";import"./Popover-CYNzPQ3Q.js";import"./check-BlRCIA6u.js";import"./useToggleState-DHkGuPLe.js";import"./TextFieldBase-BuwCJWDm.js";import"./Input-2CaRNz9p.js";import"./useTextField-DttPoMhe.js";import"./TextField.module-Dhscz2t0.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CspoMZjd.js";import"./DragAndDrop-CaT01feg.js";import"./inertValue-DH-CeBB2.js";import"./useListState-BqUbMkne.js";import"./TagGroup-CT0ZzBqW.js";import"./useHighlightSelectionDescription-vsROpl4t.js";import"./useUpdateEffect-2zMrK_VO.js";import"./useHasTabbableChild-mNBn_1uK.js";import"./chevron-down-WIo2nPvM.js";import"./Virtualizer-DvEKB8UE.js";import"./Button.module-Co5e5YHp.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
