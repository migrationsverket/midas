import{j as e}from"./iframe-BObKWO8P.js";import{c}from"./Form-DVIWY3z8.js";import{G as d}from"./Grid-BEtMKjwa.js";import{G as i}from"./GridItem-gNMAOmCX.js";import{a as x,R as u}from"./Radio-D6OJ5BNp.js";import{C as I}from"./CheckboxGroup-D3x3VxDD.js";import{C as G}from"./Checkbox-DCNOX01K.js";import{T as t}from"./TextField-90ET3Tlo.js";import{S as l}from"./Select-B9l8BtqP.js";import{L as p}from"./ListBoxItem-fYKpitDQ.js";import{B as a}from"./Button-CF3n8BCq.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-CEJP2sKk.js";import"./utils-L1ZXEAM0.js";import"./clsx-B-dksMZM.js";import"./index-DZLGwHwk.js";import"./index-w-ZTYn4u.js";import"./clsx-Ciqy0D92.js";import"./Group-DN6AoKzN.js";import"./FieldError-C85eAV5x.js";import"./Text-B0SIJ0ar.js";import"./Text-BL0-OeDh.js";import"./Button-Bj1Gx374.js";import"./Hidden-pBI9L9bQ.js";import"./useLabel-CCF_4gB4.js";import"./useLabels-CPcqYQYg.js";import"./useButton-0-s8uA0b.js";import"./SelectionIndicator-BgMQIXdK.js";import"./useField-B2ENXugf.js";import"./VisuallyHidden-C2-WAH_L.js";import"./useControlledState-2AKkTK1v.js";import"./Label-hCroOn6u.js";import"./Dialog-Ja_3xXAy.js";import"./RSPContexts--YEt9orp.js";import"./OverlayArrow-BMD8KIF5.js";import"./useResizeObserver-3VgU2Mfv.js";import"./Collection-BvFqWJhU.js";import"./index-Bvyw-qy_.js";import"./Separator-DNK48uvM.js";import"./SelectionManager-CHzFMA0s.js";import"./useEvent-BEm0Eqbv.js";import"./scrollIntoView-CMGg4YQW.js";import"./useDescription-CgE9sFBH.js";import"./ListKeyboardDelegate-BWCuCnFj.js";import"./PressResponder-E3b5fKgd.js";import"./useLocalizedStringFormatter-DdHSxoKc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DfesOHlA.js";import"./getScrollParent-BEOCR9gy.js";import"./x-Ci83I339.js";import"./createLucideIcon-Bq0_1Yjp.js";import"./useLocalizedStringFormatter-Bt1-Aj9O.js";import"./Heading-xn6cGSx1.js";import"./info-C3U6dhG6.js";import"./Popover-C2N9jWDY.js";import"./check-03ofgQbS.js";import"./useToggleState-CiNoaRur.js";import"./TextFieldBase-TW2Yc7vT.js";import"./Input-Sgu-PXBi.js";import"./useTextField-BGTqg0R_.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BeDSEEcY.js";import"./DragAndDrop-BwaC43xP.js";import"./inertValue-B_S8ouiP.js";import"./useListState-CIVvAjip.js";import"./TagGroup-CoYn9ciU.js";import"./useHighlightSelectionDescription-COF8jlai.js";import"./useUpdateEffect-R1-tQbDT.js";import"./useHasTabbableChild-8BogfyTE.js";import"./chevron-down-DOSM3Nsb.js";import"./Virtualizer-BsKJS6_t.js";import"./Button.module-BB7N-cLd.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
