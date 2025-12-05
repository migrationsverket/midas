import{j as e}from"./iframe-C5qknig8.js";import{$ as c}from"./Form-8_vshjSV.js";import{G as d}from"./Grid-BSqkFNyE.js";import{G as i}from"./GridItem-CTkNrRNe.js";import{T as t}from"./TextField-DKuTUL8X.js";import{S as l}from"./Select-C3fVTOQO.js";import{B as a}from"./Button-DU43-mcq.js";import{R as x,a as u}from"./Radio-CoKe6amM.js";import{C as I}from"./CheckboxGroup-qbtRfm6R.js";import{C as G}from"./Checkbox-BO-mnwNo.js";import{L as p}from"./ListBoxItem-By43Gzm3.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DKdcqyb7.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-noWX4_Dc.js";import"./useFocusRing-CXDO28rF.js";import"./index-DQIQ0FrH.js";import"./index-DiIH_Ibi.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CSm8LBaR.js";import"./TextField-CXPoQm4O.js";import"./FieldError-BDCaPSBM.js";import"./Text-BittgrxB.js";import"./Text-BKPtXaGU.js";import"./RSPContexts-C0FXYt0s.js";import"./Group-pK_2h4VJ.js";import"./Input-D0KSM0XN.js";import"./Hidden-eDXD45wQ.js";import"./Button-D58d_jbz.js";import"./useLabels-COhO-YfG.js";import"./useButton-BSV9csQJ.js";import"./useTextField-Cfnv4I2f.js";import"./useControlledState-DinrOT-z.js";import"./useField-CjBYQtS8.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CMSFNhe2.js";import"./Dialog-OEfzleEe.js";import"./OverlayArrow-IsBdCkco.js";import"./useResizeObserver-CJ2zvJf1.js";import"./Collection-Cl6ZApDi.js";import"./index-Cefw6TiR.js";import"./Separator-B3-EMypz.js";import"./SelectionManager-JWWrUE46.js";import"./useEvent-BGLQsjMc.js";import"./scrollIntoView-BtORbJyS.js";import"./SelectionIndicator-BJ0zuo1G.js";import"./useDescription-jFsYt6-l.js";import"./ListKeyboardDelegate-D34rUNJj.js";import"./PressResponder-eX1aEu-_.js";import"./useLocalizedStringFormatter-CDMy5frs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-KoXv4JrH.js";import"./VisuallyHidden-Cdnh5iDE.js";import"./x-C7TGMSzB.js";import"./createLucideIcon-Cxw0HGiz.js";import"./useLocalizedStringFormatter-CxThFscc.js";import"./Heading-BhYc6m-u.js";import"./info-ClsjBgt5.js";import"./Popover-lMy3K5Bk.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CXT6YtNd.js";import"./DragAndDrop-CDyiJl0t.js";import"./inertValue-DIekoTuc.js";import"./useListState-DpBMTYZB.js";import"./Tag-C8GLJUWU.js";import"./useHighlightSelectionDescription-C8eDriWq.js";import"./useUpdateEffect-PLZd-G-I.js";import"./useHasTabbableChild-Bs_Dd6wf.js";import"./chevron-down-BUQRk5pj.js";import"./Button.module-Co5e5YHp.js";import"./check-vqyjhm4m.js";import"./useToggleState-T5p8dDQh.js";import"./Virtualizer-CQuFMys_.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
