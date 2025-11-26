import{j as e}from"./iframe-XX0Vdbj7.js";import{$ as c}from"./Form-B1QmrQQd.js";import{G as d}from"./Grid-aV-eCMrk.js";import{G as i}from"./GridItem-BdZVsq9n.js";import{T as t}from"./TextField-RMmpOOKq.js";import{S as l}from"./Select-B6pBWb-r.js";import{B as a}from"./Button-CgwWNrBR.js";import{R as x,a as u}from"./Radio-CGRfEhye.js";import{C as I}from"./CheckboxGroup-L6E7lxvj.js";import{C as G}from"./Checkbox-Bqr_NhaV.js";import{L as p}from"./ListBoxItem-CccXhV4E.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CbDu8gNr.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-4Agwc_rw.js";import"./useFocusRing-DZkPrIsz.js";import"./index-DTlV7nv2.js";import"./index-BrPE2rn6.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-D7C3abHR.js";import"./TextField-c-1Ar8wy.js";import"./FieldError-ChwcOMX4.js";import"./Text-BeRQ2kjX.js";import"./Text-DyXudq4d.js";import"./RSPContexts-D4Trq4sX.js";import"./Group-hRtMScp_.js";import"./Input-Bu_CR8yg.js";import"./Hidden-BPeBnAY5.js";import"./Button-DY_cHSjI.js";import"./useLabels-BB7TQJZF.js";import"./useButton-afcNCAs_.js";import"./useTextField-CPzV1WIx.js";import"./useControlledState-CExhW45z.js";import"./useField-DGsM5StF.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-CbVtHmNO.js";import"./Dialog-DK1ZivD-.js";import"./OverlayArrow-yB237vaA.js";import"./useResizeObserver-ChfK12qD.js";import"./Collection-chvZQn9h.js";import"./index-Do3HD5u9.js";import"./Separator-CNBjlMa5.js";import"./SelectionManager-Cnjka0SB.js";import"./useEvent-BDIgNVUL.js";import"./scrollIntoView-BOk-Zv9y.js";import"./SelectionIndicator-BcLURfzU.js";import"./useDescription-IkLXckEB.js";import"./ListKeyboardDelegate-D5bscAnH.js";import"./PressResponder-DRgiOOFI.js";import"./useLocalizedStringFormatter-BMuLFIl9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CJczyCZU.js";import"./VisuallyHidden-D9J82ZWu.js";import"./x-BJd4-ddg.js";import"./createLucideIcon-cScy24ZI.js";import"./useLocalizedStringFormatter-BYLA1ivb.js";import"./Heading-B2A5PAFc.js";import"./info-C1GCfvjH.js";import"./Popover-B6og31xQ.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BNUFrhXY.js";import"./DragAndDrop-DMUwXf-a.js";import"./inertValue-DwX4H1Lq.js";import"./useListState-BhFd9I6W.js";import"./Tag-yQ6jz-lf.js";import"./useHighlightSelectionDescription-bTKjnWm1.js";import"./useUpdateEffect-jDo7NlyM.js";import"./useHasTabbableChild-DX8cL5vr.js";import"./chevron-down-BWt_vPFY.js";import"./Button.module-CtQ1deO8.js";import"./check-CiAR6AZ4.js";import"./useToggleState-DlrQVGpL.js";import"./Virtualizer--qi-0BCC.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
