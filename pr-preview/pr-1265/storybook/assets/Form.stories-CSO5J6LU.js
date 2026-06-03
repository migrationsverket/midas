import{j as e}from"./iframe-B-lTFvoy.js";import{c}from"./Form-BkPykOZH.js";import{G as d}from"./Grid-DuUtTzO2.js";import{G as i}from"./GridItem-Cewg0Pxr.js";import{a as x,R as u}from"./Radio-XZPyb3d6.js";import{C as I}from"./CheckboxGroup-DsMayM2Y.js";import{C as G}from"./Checkbox-CSJu_GML.js";import{T as t}from"./TextField-BrzF4MLn.js";import{S as l}from"./Select-BZ4avbfe.js";import{L as p}from"./ListBoxItem-CA-vSEFm.js";import{B as a}from"./Button-aUjqyot5.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-1mXKXGvg.js";import"./utils-BvE7c9kg.js";import"./clsx-B-dksMZM.js";import"./index-DmPhFD94.js";import"./index-DAnTlNFf.js";import"./clsx-Ciqy0D92.js";import"./Group-X44LMo-J.js";import"./FieldError-BUQWfKIf.js";import"./Text-BcmCG7pr.js";import"./Text-C1H4pvzD.js";import"./Button-DxSNXM4z.js";import"./Hidden-DgGj9s0X.js";import"./useLabel-D3_Mwj4N.js";import"./useLabels-DPXFFgdJ.js";import"./useButton-BpEh7YD9.js";import"./SelectionIndicator-D3wtYqkk.js";import"./useField-CZNhYKxr.js";import"./VisuallyHidden-BBaBjIdQ.js";import"./useControlledState-CblkDfUl.js";import"./Label-VFVkv4nl.js";import"./Dialog-peOVGIQh.js";import"./RSPContexts-D3IvaYAD.js";import"./OverlayArrow--7LO6zbc.js";import"./useResizeObserver-BsnyFbXq.js";import"./Collection-DN7kv7Ki.js";import"./index-D871kQeG.js";import"./Separator-B2k8Seix.js";import"./SelectionManager-CyiCJxHi.js";import"./useEvent-CDFu6uQE.js";import"./scrollIntoView-YOf-cX1Z.js";import"./useDescription-C3Cr_Jxc.js";import"./ListKeyboardDelegate-BUJNuGNB.js";import"./PressResponder-Bohcd8Do.js";import"./useLocalizedStringFormatter-DFJodF-E.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-VgwKKx1S.js";import"./getScrollParent-C7d2R0II.js";import"./ModalOverlay-dZTLCVIM.js";import"./x-CB9WHZye.js";import"./createLucideIcon-DTdT2pbF.js";import"./useLocalizedStringFormatter-Cmv69HRb.js";import"./Heading-B0wvQHWV.js";import"./info-D-sGA9gx.js";import"./Popover-B2RgYLbH.js";import"./check-DAyQsrBW.js";import"./useToggleState-B0Go0anX.js";import"./TextFieldBase-qn9HXdRq.js";import"./Input-DgIPJVVr.js";import"./useTextField-CUyjL-LP.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-C11hZULO.js";import"./DragAndDrop-DpnPldsa.js";import"./inertValue-B6aWjNgm.js";import"./useListState-X8j78Ie8.js";import"./TagGroup-BbLIEE9c.js";import"./useHighlightSelectionDescription-BzjEiq55.js";import"./useUpdateEffect-BoHOTqay.js";import"./useHasTabbableChild-CH1hUSqQ.js";import"./chevron-down-D3KMBlJG.js";import"./Virtualizer-BfwAeYrZ.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
