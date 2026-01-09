import{j as e}from"./iframe-Dor4ircF.js";import{$ as c}from"./Form-PC2GFGky.js";import{G as d}from"./Grid-DgDYU8YU.js";import{G as i}from"./GridItem-COIpLovO.js";import{T as t}from"./TextField-VQLExYtU.js";import{S as l}from"./Select-DNl6BtRI.js";import{B as a}from"./Button-DlFMUaPv.js";import{R as x,a as u}from"./Radio-E28iXFCN.js";import{C as I}from"./CheckboxGroup-DUlIotWC.js";import{C as G}from"./Checkbox-BoCJeAWo.js";import{L as p}from"./ListBoxItem-DJFqTJpc.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DMuGTtMS.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CT2uGaah.js";import"./useFocusRing-CI_ISeqX.js";import"./index-BRWlJPJW.js";import"./index-qWyL7EHC.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BNOxtluU.js";import"./TextField-C-NSJek-.js";import"./FieldError-CwY-5fO_.js";import"./Text-B-FP0CmP.js";import"./Text-BhYbgXGv.js";import"./RSPContexts-CxfAfl7o.js";import"./Group-DXJMExwX.js";import"./Input-Cieaqa26.js";import"./Hidden-Dp-Crghp.js";import"./Button-CwntTkhI.js";import"./useLabels-CpLLuEK0.js";import"./useButton-CwfL82kC.js";import"./useTextField-CJvkV0oq.js";import"./useControlledState-DvR4e7YP.js";import"./useField-DjgNXvlM.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DoMVJZ1W.js";import"./Dialog-tR6ZL6WY.js";import"./OverlayArrow-C1tPV9MD.js";import"./useResizeObserver-DHS0iUPg.js";import"./Collection-Cl9mpUrY.js";import"./index-B6HabYp9.js";import"./Separator-BtiURR58.js";import"./SelectionManager-BbQqTeL4.js";import"./useEvent-Bb7RUZ2F.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CTEwBRy7.js";import"./useDescription-Drpzw2S9.js";import"./ListKeyboardDelegate-DdhKtesC.js";import"./PressResponder-VqOr_Qee.js";import"./useLocalizedStringFormatter-BWgIDVv3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DqKIFYFG.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CIjKH1Nn.js";import"./x-pETj6_df.js";import"./createLucideIcon-Db-iAtDf.js";import"./useLocalizedStringFormatter-Hlva-IBM.js";import"./Heading-TEjQ0Xg3.js";import"./info-75RXVdD6.js";import"./Popover-BS_gm3hV.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CpFHeB7i.js";import"./DragAndDrop-xR8Rf372.js";import"./inertValue-B4PETylf.js";import"./useListState-BePCG1mt.js";import"./Tag-BwD3h2E6.js";import"./useHighlightSelectionDescription-Dpk3om1j.js";import"./useUpdateEffect-BKheAyNI.js";import"./useHasTabbableChild-DOTnKQuk.js";import"./chevron-down-Itw-UnyK.js";import"./Button.module-Co5e5YHp.js";import"./check-BqQg4jAJ.js";import"./useToggleState-z7jOcBzn.js";import"./Virtualizer-jlKBNGur.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
