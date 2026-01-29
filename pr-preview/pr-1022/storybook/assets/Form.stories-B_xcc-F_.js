import{j as e}from"./iframe-3vXkeaXf.js";import{$ as c}from"./Form-Cn_bxQUe.js";import{G as d}from"./Grid-jKRdygNl.js";import{G as i}from"./GridItem-HUj0VO26.js";import{T as t}from"./TextField-BKXVY0XI.js";import{S as l}from"./Select-DDVxfa7A.js";import{B as a}from"./Button-CqTfhLBS.js";import{R as x,a as u}from"./Radio-4PoDv8_u.js";import{C as I}from"./CheckboxGroup-BxvplIRE.js";import{C as G}from"./Checkbox-CnU1m10H.js";import{L as p}from"./ListBoxItem-CqzIKqyv.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Ci2rW9QR.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-zcqsPAxn.js";import"./useFocusRing-DNafsx48.js";import"./index-CZo5RHNF.js";import"./index-DodIUsUi.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DpM-MBDq.js";import"./TextField-CGKXd7rP.js";import"./FieldError-CUFcw2Bx.js";import"./Text-BHe6HkmH.js";import"./Text-faRT9Ypk.js";import"./RSPContexts-CALLQvPo.js";import"./Group-CgpCnIk-.js";import"./Input-CYCPFwsM.js";import"./Hidden-If5Crsfr.js";import"./Button-Dhwcp2Tj.js";import"./useLabels-D1__96MT.js";import"./useButton-CIQe5U3d.js";import"./useTextField-awxZU8Rd.js";import"./useControlledState-BqfUWkUs.js";import"./useField-D9Vx8qL5.js";import"./TextField.module-1fNSVGjT.js";import"./Label-zVr14RRP.js";import"./Dialog-BWtB4LfF.js";import"./OverlayArrow-C-8N7e_j.js";import"./useResizeObserver-BPMKRs-7.js";import"./Collection-CroRJ_z_.js";import"./index-BIpjrxpZ.js";import"./Separator-Cx5RQKDE.js";import"./SelectionManager-B9H37USF.js";import"./useEvent-Dtk_oGRL.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BmK6g95b.js";import"./useDescription-SJAzHkl8.js";import"./ListKeyboardDelegate-DjXlbXio.js";import"./PressResponder-eAX4CWAr.js";import"./useLocalizedStringFormatter-Lx5W0ILu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-cZLEa70V.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Dmqfs6c2.js";import"./x-YaSecB4y.js";import"./createLucideIcon-Dr81SgBw.js";import"./useLocalizedStringFormatter-Bnn512eF.js";import"./Heading-BdK0eQ3G.js";import"./info-5HPkFg7s.js";import"./Popover-CaM020lY.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BgoWq4eJ.js";import"./DragAndDrop-DPcuUUQx.js";import"./inertValue-Cy5yqUgb.js";import"./useListState-CLX5HrYk.js";import"./Tag-DLjhYbYu.js";import"./useHighlightSelectionDescription-BFpKb7JK.js";import"./useUpdateEffect-C1OlrAvX.js";import"./useHasTabbableChild-CFTkKE8P.js";import"./chevron-down-CMecdLva.js";import"./Button.module-Co5e5YHp.js";import"./check-BbgmuBYL.js";import"./useToggleState-CLlJvVPk.js";import"./Virtualizer-CUMr8fIW.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
