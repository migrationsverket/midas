import{j as e}from"./iframe-aJfE6oy0.js";import{c}from"./Form-DCHTbw_J.js";import{G as d}from"./Grid-CqOASq11.js";import{G as i}from"./GridItem-CFYMlaNq.js";import{a as x,R as u}from"./Radio-BSctX0sx.js";import{C as I}from"./CheckboxGroup-CYKIIi2p.js";import{C as G}from"./Checkbox-BYvS4zLx.js";import{T as t}from"./TextField-DtT8rsn9.js";import{S as l}from"./Select-BNDjcO7L.js";import{L as p}from"./ListBoxItem-C3jW8GC-.js";import{B as a}from"./Button-DTBmOwE-.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-ClTA_ULX.js";import"./utils-COacjnfx.js";import"./clsx-B-dksMZM.js";import"./index-B_9hsNIp.js";import"./index-Nx_fUc0r.js";import"./clsx-Ciqy0D92.js";import"./Group-Sj8qFFJW.js";import"./FieldError-BZPifAC7.js";import"./Text-CBxYHQaa.js";import"./Text-CjkYZ3Fr.js";import"./Button-gsjvyy6J.js";import"./Hidden-ijM5UvIg.js";import"./useLabel-BO6GqdSt.js";import"./useLabels-Jql3WVtl.js";import"./useButton-Bp12HEqD.js";import"./SelectionIndicator-2xUxav39.js";import"./useField-BuwSGg-D.js";import"./VisuallyHidden-D5b4EtUm.js";import"./useControlledState-y9DEv0LS.js";import"./Label-BYVk5NXm.js";import"./Dialog-DWeUjEts.js";import"./RSPContexts-9F0yhmI5.js";import"./OverlayArrow-CeyEtvfk.js";import"./useResizeObserver-iAKXnEML.js";import"./Collection-t5JwsPxx.js";import"./index-C4iPrJ7t.js";import"./Separator-pVDiBCsW.js";import"./SelectionManager-DbwSoSAB.js";import"./useEvent-BKCPZ-HL.js";import"./scrollIntoView-CNAiIIsG.js";import"./useDescription-DS9x0_tx.js";import"./ListKeyboardDelegate-BJy3xEaG.js";import"./PressResponder-1-7J0-yf.js";import"./useLocalizedStringFormatter--tqgw_C7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B1lZ6cxA.js";import"./getScrollParent-C89CZMJK.js";import"./ModalOverlay-qDW4V-mi.js";import"./x-a-leTFOM.js";import"./createLucideIcon-CHcVE9D4.js";import"./useLocalizedStringFormatter-CUSht9QP.js";import"./Heading-SNP1UP3U.js";import"./info-KcIhJiDz.js";import"./Popover-ChR_XA2B.js";import"./check-26zGa1yI.js";import"./useToggleState-BMrc-zSz.js";import"./TextFieldBase-C3tczTqV.js";import"./Input-CJaHd5ka.js";import"./useTextField-BIVkaC_L.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BN6UaAI0.js";import"./DragAndDrop-DJ7FDm_j.js";import"./inertValue-DLqqQ2r9.js";import"./useListState-B3gJr7qH.js";import"./TagGroup-CYLR1dtW.js";import"./useHighlightSelectionDescription-D-e1cuP8.js";import"./useUpdateEffect-C_LKVmj0.js";import"./useHasTabbableChild-UsIrr8D_.js";import"./chevron-down-C8l2l0Q0.js";import"./Virtualizer-1Hki09Dy.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
