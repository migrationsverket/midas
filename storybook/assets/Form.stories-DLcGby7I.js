import{j as e}from"./iframe-BDAeyV_L.js";import{$ as c}from"./Form-DfB0YOFw.js";import{G as d}from"./Grid-2izxsCXR.js";import{G as i}from"./GridItem-DW0UvZK-.js";import{T as t}from"./TextField-CYAmNwtT.js";import{S as l}from"./Select-CUUe9TxR.js";import{B as a}from"./Button-CzvpZwUk.js";import{R as x,a as u}from"./Radio-CreJZ4YJ.js";import{C as I}from"./CheckboxGroup-W8XTz-BX.js";import{C as G}from"./Checkbox-CnHqE8jH.js";import{L as p}from"./ListBoxItem-CRaHWdWy.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-QbpHp2iH.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DaMPzBFa.js";import"./useFocusRing-DZ9oxgDy.js";import"./index-bebXLijF.js";import"./index-BxXpe6Uv.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-fxj5PK_l.js";import"./TextField-BjyJaeOb.js";import"./FieldError-nYxCLXng.js";import"./Text-CuLPV3Pn.js";import"./Text-CgZVKuAu.js";import"./RSPContexts-uVPcO6CS.js";import"./Group-Bih5ZLR3.js";import"./Input-BuqwJ0XY.js";import"./Hidden-CWKhTNWg.js";import"./Button-hcT7fu5t.js";import"./useLabels-CJ7PqtrQ.js";import"./useButton-yTtoFlYV.js";import"./useTextField-BRJvIvPa.js";import"./useControlledState-B4b2AaJr.js";import"./useField-C7GoH2ks.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-natk6EPf.js";import"./Dialog-o3tFSf8d.js";import"./OverlayArrow-BVayRGDK.js";import"./useResizeObserver-2N3Ozx5o.js";import"./Collection-y60iSVfC.js";import"./index-It1jGq4A.js";import"./Separator-DfoJ1Y5j.js";import"./SelectionManager-_BpQMH4s.js";import"./useEvent-DCC2o4ue.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D2sLS2N5.js";import"./useDescription-BsNFz1-d.js";import"./ListKeyboardDelegate-DrX08Zf9.js";import"./PressResponder-CUy93U5r.js";import"./useLocalizedStringFormatter-BWgc5TPM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DTtP-AWM.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C7amzv03.js";import"./x-Bo3luZEL.js";import"./createLucideIcon-DrPkV-uJ.js";import"./useLocalizedStringFormatter-CEJ4AsDN.js";import"./Heading-CR3sFUYz.js";import"./info-BgnmUpVy.js";import"./Popover-MkmEChob.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DDRVUSz-.js";import"./DragAndDrop-CKlhF5ZA.js";import"./inertValue-DJKydUHj.js";import"./useListState-BwXPOFr6.js";import"./Tag-DFEQ5eCF.js";import"./useHighlightSelectionDescription-C8wOl2Bm.js";import"./useUpdateEffect-DB22ihof.js";import"./useHasTabbableChild-CtE0_TNg.js";import"./chevron-down-DMqkmWhh.js";import"./Button.module-Co5e5YHp.js";import"./check-DQ3XE-pE.js";import"./useToggleState-C-1GHaBB.js";import"./Virtualizer-D7HwE_jU.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
