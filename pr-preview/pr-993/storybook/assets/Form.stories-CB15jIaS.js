import{j as e}from"./iframe-kbhJnT9w.js";import{$ as c}from"./Form-Sz63W5mX.js";import{G as d}from"./Grid-gKSDDnQZ.js";import{G as i}from"./GridItem-mlZLe4vK.js";import{T as t}from"./TextField-4ggakJx4.js";import{S as l}from"./Select-B4IT6vaX.js";import{B as a}from"./Button-2yQDInF3.js";import{R as x,a as u}from"./Radio-CED190HU.js";import{C as I}from"./CheckboxGroup-r6RCIsjZ.js";import{C as G}from"./Checkbox-CtUYA1Ig.js";import{L as p}from"./ListBoxItem-r2ubsuuE.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BIWQukqa.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B19BTBT3.js";import"./useFocusRing-D8-czbxO.js";import"./index-zuYBL4Lo.js";import"./index-7Y8nIPcc.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DW4ia68f.js";import"./TextField-kmcSlHKQ.js";import"./FieldError-BjDoFXdk.js";import"./Text-Bx3yC9L1.js";import"./Text-DNo-c8E4.js";import"./RSPContexts-CpYiUO21.js";import"./Group-CJikS2_D.js";import"./Input-DEJmcne5.js";import"./Hidden-DLSrH6le.js";import"./Button-CJhwVjkq.js";import"./useLabels-C4BeTwXz.js";import"./useButton-DnRhcX8P.js";import"./useTextField-BYRnC2DJ.js";import"./useControlledState-BmDsoGZM.js";import"./useField-DWW2mLhZ.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-yLv35Oa7.js";import"./Dialog-DCPwMQF2.js";import"./OverlayArrow-DWlWKxC4.js";import"./useResizeObserver-Dti6xn4y.js";import"./Collection-CMsKZrzA.js";import"./index-DnSiiI5S.js";import"./Separator-DTiKf-In.js";import"./SelectionManager-BZPl8iel.js";import"./useEvent-B_EArHEW.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BO1jws8h.js";import"./useDescription-DS99e2CE.js";import"./ListKeyboardDelegate-CYV2I6jz.js";import"./PressResponder-D7_J9MXE.js";import"./useLocalizedStringFormatter-DnDmMNZN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DSHBvtn7.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BElvd5Sz.js";import"./x-Db3eMiaL.js";import"./createLucideIcon-MdX6GIq3.js";import"./useLocalizedStringFormatter-DENJ27Hf.js";import"./Heading-oKhQjAka.js";import"./info-ImPqQnBe.js";import"./Popover-_o8rL1se.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Da_SwkOC.js";import"./DragAndDrop-CNeHZO3u.js";import"./inertValue-a_d5hbbb.js";import"./useListState-Dk5B3a4e.js";import"./Tag-Chd-FBnY.js";import"./useHighlightSelectionDescription-DtwgI_81.js";import"./useUpdateEffect-DXfetLTU.js";import"./useHasTabbableChild-B3iidSbZ.js";import"./chevron-down-CyOAnLkn.js";import"./Button.module-Co5e5YHp.js";import"./check-DHJXkBAK.js";import"./useToggleState-dPELXYDN.js";import"./Virtualizer-CJTFYqtV.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
