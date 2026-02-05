import{j as e}from"./iframe-BEec9xws.js";import{$ as c}from"./Form-BJTstxyD.js";import{G as d}from"./Grid-Dd1R-qsc.js";import{G as i}from"./GridItem-D8PMZJ3E.js";import{a as x,R as u}from"./Radio-BS2uushE.js";import{C as I}from"./CheckboxGroup-CxdSz3O3.js";import{C as G}from"./Checkbox-6c_iCCMC.js";import{T as t}from"./TextField-C730naT0.js";import{S as l}from"./Select-6BYbwMQG.js";import{L as p}from"./ListBoxItem-CyvcKjLz.js";import{B as a}from"./Button-ZBZN_eZh.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-tmadhNLO.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Bw69zpyk.js";import"./useFocusRing-CHLWvWfU.js";import"./index-jsa7VRLI.js";import"./index-BPo6dsF7.js";import"./clsx-Ciqy0D92.js";import"./Group-y7vrNsst.js";import"./FieldError-2T8QeYCV.js";import"./Text-CEDi3dsy.js";import"./Text-Cqp2sCpU.js";import"./Button-DWX0vVyl.js";import"./Hidden-uHrwE7I5.js";import"./useLabels-B9n4tFRy.js";import"./useButton-G3mO1U0h.js";import"./SelectionIndicator-COZ8q6cB.js";import"./useField-7d8i6LLe.js";import"./VisuallyHidden-B_EbF9d8.js";import"./useControlledState-BAzuR8Jv.js";import"./Label-D1PWWmqN.js";import"./Dialog-gGRr6dJL.js";import"./RSPContexts-COK32NAs.js";import"./OverlayArrow-Bma7uS4_.js";import"./useResizeObserver-D5LXj7ca.js";import"./Collection-D3spvIRq.js";import"./index-C2h17Hkd.js";import"./Separator-m66wPUn4.js";import"./SelectionManager-Bp8NDSgY.js";import"./useEvent-e5sb6lYY.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CLIom5bP.js";import"./ListKeyboardDelegate-BNbwgrMg.js";import"./PressResponder-DN4lRlRa.js";import"./useLocalizedStringFormatter-DPYn3iJZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DCnHayjS.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-DNVtugLs.js";import"./createLucideIcon-BEU2T1Tc.js";import"./useLocalizedStringFormatter-piak_TFz.js";import"./Heading-C3sBlwM8.js";import"./info-B3Ed_GmD.js";import"./Popover-BtG-GTgy.js";import"./check-BVZC8sAP.js";import"./useToggleState-IlNucxpu.js";import"./TextFieldBase-B9hmVprt.js";import"./TextField-C43184GK.js";import"./Input-C--JKR4S.js";import"./useTextField-Bg4NdGaF.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BL-wpDbX.js";import"./DragAndDrop-Q-k-vzm1.js";import"./inertValue-DtCUBPf0.js";import"./useListState-CUalBgUI.js";import"./Tag-NtNQCUAT.js";import"./useHighlightSelectionDescription-CUb2GUxx.js";import"./useUpdateEffect-BjBz_Gki.js";import"./useHasTabbableChild-CRkkL3u3.js";import"./chevron-down-uLfUgP1Z.js";import"./Virtualizer-B4QYHKfw.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
