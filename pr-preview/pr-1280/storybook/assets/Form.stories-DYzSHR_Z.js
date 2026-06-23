import{j as e}from"./iframe-BusKbIuL.js";import{c}from"./Form-DVi0rKS7.js";import{G as d}from"./Grid-0mG-XFP_.js";import{G as i}from"./GridItem-yMObzwFH.js";import{a as x,R as u}from"./Radio-oKBML954.js";import{C as I}from"./CheckboxGroup-BpJHQeIe.js";import{C as G}from"./Checkbox-BrkKfbP0.js";import{T as t}from"./TextField-d2LuRtVN.js";import{S as l}from"./Select-ChExd6PQ.js";import{L as p}from"./ListBoxItem-hbqJw4o5.js";import{B as a}from"./Button-CEECLnQG.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-Bkm-baB3.js";import"./utils-BLk-MBDB.js";import"./clsx-B-dksMZM.js";import"./index-CnP2yi1p.js";import"./index-DAOAnwsN.js";import"./clsx-Ciqy0D92.js";import"./Group-CBE_Jb-J.js";import"./FieldError-DYrJGow5.js";import"./Text-By1Rmolv.js";import"./Text-BSlgEswi.js";import"./Button-D16PjYbu.js";import"./Hidden-IsjPxMOX.js";import"./useLabel-RD_wy9US.js";import"./useLabels-Dzl_jQ3w.js";import"./useButton-BmGPf_ms.js";import"./SelectionIndicator-DIVBfEpP.js";import"./useField-TTAqEZ-L.js";import"./VisuallyHidden-DfUkCTQh.js";import"./useControlledState-VeRXhIhk.js";import"./Label-TAC8RkyL.js";import"./Dialog-Bl6BPUcG.js";import"./RSPContexts-CMg-o8P6.js";import"./OverlayArrow-XVvRfD3R.js";import"./useResizeObserver-BmwpnOhf.js";import"./Collection-DZTceJ5c.js";import"./index-DlodUe4K.js";import"./Separator-Br0Bxz8Z.js";import"./SelectionManager-CZQO9iyQ.js";import"./useEvent-D1SRwD2V.js";import"./scrollIntoView-DVC3yEfE.js";import"./useDescription-0cGLMs3d.js";import"./ListKeyboardDelegate-BhTo0HRI.js";import"./PressResponder-NQ2bsNbb.js";import"./useLocalizedStringFormatter-BzO50CYY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CLn9Imaq.js";import"./getScrollParent-BBgpxqF_.js";import"./ModalOverlay-C6pC5Rcr.js";import"./x-BjSALVJQ.js";import"./createLucideIcon-CsIH265l.js";import"./useLocalizedStringFormatter-B0UBIKFs.js";import"./Heading-MC_GZ1Jp.js";import"./info-BdG13eZS.js";import"./Popover-DcyZJrol.js";import"./check-fBSzI3c7.js";import"./useToggleState-DhLY6quj.js";import"./TextFieldBase-DvpbkdS0.js";import"./Input-ChWvvezn.js";import"./useTextField-DA7Ox9WZ.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-C9p3no_U.js";import"./DragAndDrop-7lwC4zSi.js";import"./inertValue-DPzw7k92.js";import"./useListState-BHnHeIlD.js";import"./TagGroup-BN9k7kk5.js";import"./useHighlightSelectionDescription-MU2p82Fd.js";import"./useUpdateEffect-BoonRRtT.js";import"./useHasTabbableChild-CkNKJ-ka.js";import"./chevron-down-Caqm8Nw_.js";import"./Virtualizer-CSXNo49M.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
