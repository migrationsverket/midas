import{j as e}from"./iframe-CiD__Hyy.js";import{$ as c}from"./Form-CTNtdEqU.js";import{G as d}from"./Grid-p54bGA2R.js";import{G as i}from"./GridItem-KoMWTF2k.js";import{T as t}from"./TextField-BDFa_xHN.js";import{S as l}from"./Select-CblmMcnk.js";import{B as a}from"./Button-D24FKJ_j.js";import{R as x,a as u}from"./Radio-B9QuoGct.js";import{C as I}from"./CheckboxGroup-l80gNsWh.js";import{C as G}from"./Checkbox-DJlkMuSu.js";import{L as p}from"./ListBoxItem-CCNN8sr1.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Q1z5OATQ.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Ccsqp47f.js";import"./useFocusRing-BySSjodA.js";import"./index-BT7nfzmR.js";import"./index-CV7cu1dt.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DPaKP_TK.js";import"./TextField-Bmy87Lel.js";import"./FieldError-Dm1ekGMw.js";import"./Text-DeJgjfoW.js";import"./Text-BQRoNCWw.js";import"./RSPContexts-D7xeFMEU.js";import"./Group-uvCIo-cz.js";import"./Input-BFUk7xIH.js";import"./Hidden-BE6gFQQR.js";import"./Button-B2sA97lD.js";import"./useLabels-CX9hgZKe.js";import"./useButton-X_4XH9RQ.js";import"./useTextField-Bz-0psYq.js";import"./useControlledState-B8jVS4zb.js";import"./useField-BJf9s_op.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CTzQhgPn.js";import"./Dialog-XK2tbbyX.js";import"./OverlayArrow-quJYtZJD.js";import"./useResizeObserver-DJeJdTvO.js";import"./Collection-DqSIwb3e.js";import"./index-D2IFlk2J.js";import"./Separator-C76xaioL.js";import"./SelectionManager-D-z9OdLk.js";import"./useEvent-CdJ8U0oy.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D4dp0ZQd.js";import"./useDescription-iasQP9PS.js";import"./ListKeyboardDelegate-BJs1W7dk.js";import"./PressResponder-DsyqempF.js";import"./useLocalizedStringFormatter-GCebu6ZU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CP1kT0Bu.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BXpQqt24.js";import"./x-BkZTMQtm.js";import"./createLucideIcon-BkxrGWvy.js";import"./useLocalizedStringFormatter-EaUWWv-J.js";import"./Heading-DwR6zONe.js";import"./info-XB7eNwtX.js";import"./Popover-Cnn_KCNJ.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CjMt2GxP.js";import"./DragAndDrop-CMzY9XOQ.js";import"./inertValue-c0V7mEe0.js";import"./useListState-Wiwp-Qhy.js";import"./Tag-bNWj7wKO.js";import"./useHighlightSelectionDescription-DsL0oXYe.js";import"./useUpdateEffect-B_XcpdY9.js";import"./useHasTabbableChild-B7YeaNKr.js";import"./chevron-down-CLj_-qTR.js";import"./Button.module-Co5e5YHp.js";import"./check-CDwlczNW.js";import"./useToggleState-dTJXhxbR.js";import"./Virtualizer-CyQ6YH8x.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
