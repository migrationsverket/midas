import{j as e}from"./iframe-Bc-UjTRz.js";import{c}from"./Form-MxAWzd2x.js";import{G as d}from"./Grid-BOmA3uii.js";import{G as i}from"./GridItem-BrRJdl39.js";import{a as x,R as u}from"./Radio-BGJyjF2j.js";import{C as I}from"./CheckboxGroup-CMb4FT0L.js";import{C as G}from"./Checkbox-3GA-Gy7P.js";import{T as t}from"./TextField-BiBR4UBP.js";import{S as l}from"./Select-CXpWlvig.js";import{L as p}from"./ListBoxItem-VUYFt8Va.js";import{B as a}from"./Button-Ddjv6hkf.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DmMd8vo8.js";import"./utils-CIlBOTwB.js";import"./clsx-B-dksMZM.js";import"./index-Dv-GYJsK.js";import"./index-qwqwtO2K.js";import"./clsx-Ciqy0D92.js";import"./Group-Bzniv0F2.js";import"./FieldError-pc1xIYti.js";import"./Text-FaStHPve.js";import"./Text-EmoXsUsF.js";import"./Button-BBbybcMx.js";import"./Hidden-Bobixe9k.js";import"./useLabel-BT5HgTPM.js";import"./useLabels-DPsB-EZ0.js";import"./useButton-CiKofbei.js";import"./SelectionIndicator-gZnD50wI.js";import"./useField-CMU55_2k.js";import"./VisuallyHidden-De98nctX.js";import"./useControlledState-Dz98cjw-.js";import"./Label-C-pg10x0.js";import"./Dialog-BSkPAq_n.js";import"./RSPContexts-BrVLX_Kr.js";import"./OverlayArrow-DfHYbDXs.js";import"./useResizeObserver-BMARLXxD.js";import"./Collection-DChyS9dt.js";import"./index-B-79tFRT.js";import"./Separator-PFdfuk3j.js";import"./SelectionManager-D8tK0CCZ.js";import"./useEvent-CjNBBIKs.js";import"./scrollIntoView-CTyn5EWZ.js";import"./useDescription-axt_AZYR.js";import"./ListKeyboardDelegate-Ch3xdJaU.js";import"./PressResponder-Bd0tk48r.js";import"./useLocalizedStringFormatter-CjnzGiN8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D7sGwqcv.js";import"./getScrollParent-DeC6xe2r.js";import"./ModalOverlay-BHNnLZVe.js";import"./x-BlqzX1Dg.js";import"./createLucideIcon-Cvy5MTlk.js";import"./useLocalizedStringFormatter-CK7mP7jw.js";import"./Heading-riE0Xj9K.js";import"./info-Cqa2lKV1.js";import"./Popover-BkUvNTOR.js";import"./check-CV39bvdl.js";import"./useToggleState-iSpTA0kN.js";import"./TextFieldBase-z9iNNChx.js";import"./Input-BZYYU2yt.js";import"./useTextField-eIYPxOb0.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BdFKEbjO.js";import"./DragAndDrop-BaAzLR14.js";import"./inertValue-K4I0xsIo.js";import"./useListState-BljWcX_n.js";import"./TagGroup-QXJJM98E.js";import"./useHighlightSelectionDescription-zZXGkSet.js";import"./useUpdateEffect-CXdA3QNj.js";import"./useHasTabbableChild-DHHTkh87.js";import"./chevron-down-BnaPyjtc.js";import"./Virtualizer-DswmyQpU.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
