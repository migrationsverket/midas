import{j as e}from"./iframe-BU6kIGzE.js";import{$ as c}from"./Form-D_2Tzhhs.js";import{G as d}from"./Grid-CTOudlWs.js";import{G as i}from"./GridItem-CFy-MhpW.js";import{T as t}from"./TextField-qslq0V2e.js";import{S as l}from"./Select-K2pzKpuc.js";import{B as a}from"./Button-DUCzx4_4.js";import{R as x,a as u}from"./Radio-Dt9ItMyu.js";import{C as I}from"./CheckboxGroup-Cyw_zqx2.js";import{C as G}from"./Checkbox-DrWPhbFG.js";import{L as p}from"./ListBoxItem-mH3ZxecB.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DwBB38ip.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DTxNX5vp.js";import"./useFocusRing-Dvp7gJRw.js";import"./index-Dv6U3VwT.js";import"./index-DyZImytF.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BD8Ndz77.js";import"./TextField-CrzbavrF.js";import"./FieldError-CUk6ZN6c.js";import"./Text-JypUyMeF.js";import"./Text-CQspy15V.js";import"./RSPContexts-BRqazcIV.js";import"./Group-CfmetJY-.js";import"./Input-CnWilOKS.js";import"./Hidden-CGqS0Jzf.js";import"./Button-DOwpnfPC.js";import"./useLabels-DikblKAC.js";import"./useButton-DOAxkkBc.js";import"./useTextField-CYhGNxMz.js";import"./useControlledState-CCRLFJ5Q.js";import"./useField-Dy2in3Zn.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BPdaWe9B.js";import"./Dialog-xlRMg6iz.js";import"./OverlayArrow-Bl3KLXNF.js";import"./useResizeObserver-B94eBDEG.js";import"./Collection-BF4xCepe.js";import"./index-DnHLYRqW.js";import"./Separator-XoRWK5dX.js";import"./SelectionManager-C271GyWd.js";import"./useEvent-Bzt2Vkll.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-eeJzDz1Z.js";import"./useDescription-B-6CLxOX.js";import"./ListKeyboardDelegate-2S5HS31x.js";import"./PressResponder-Ds6sB9YM.js";import"./useLocalizedStringFormatter-E1-lnqHI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BvjedF0u.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BjLN-Bea.js";import"./x-DLGK6h12.js";import"./createLucideIcon-BFaI5vBG.js";import"./useLocalizedStringFormatter-Dkmyjsow.js";import"./Heading-Z4JZUrow.js";import"./info-8oCdIKAu.js";import"./Popover-Ds96ofCc.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-T-fd9amX.js";import"./DragAndDrop-Bdzd1mLr.js";import"./inertValue-CcIL6zQk.js";import"./useListState-Drqr5wFO.js";import"./Tag-Cw4C95Sx.js";import"./useHighlightSelectionDescription-aAgRvMzg.js";import"./useUpdateEffect-BsYc8DOC.js";import"./useHasTabbableChild-BWcpHuG_.js";import"./chevron-down-CAGIvUpX.js";import"./Button.module-Co5e5YHp.js";import"./check-BpQvJOQF.js";import"./useToggleState-v5XgKDtT.js";import"./Virtualizer-C6E8LSdg.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
