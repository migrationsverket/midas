import{j as e}from"./iframe-CDna8jjE.js";import{$ as c}from"./Form-CoBzq9b-.js";import{G as d}from"./Grid-rcI9n0Re.js";import{G as i}from"./GridItem-iflZb__e.js";import{T as t}from"./TextField-CalUGMI0.js";import{S as l}from"./Select-CG1Fp73i.js";import{B as a}from"./Button-BzWf_0Ce.js";import{R as x,a as u}from"./Radio-CzsCgduO.js";import{C as I}from"./CheckboxGroup-CiRTp2JG.js";import{C as G}from"./Checkbox-RbRmUEZD.js";import{L as p}from"./ListBoxItem-P3X5YiZK.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DLwzmocV.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CLHtYi4A.js";import"./useFocusRing-Cui58P_W.js";import"./index-CqO8KTpm.js";import"./index-C1kBw2K3.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CTBWCJ9M.js";import"./TextField-D-MQTzgl.js";import"./FieldError-Bwk-kYY7.js";import"./Text-DFouRg6c.js";import"./Text-CTMNSfQo.js";import"./RSPContexts-BA89GZqc.js";import"./Group-DL5kNHQg.js";import"./Input-BeQf39yX.js";import"./Hidden-CL_R-LHP.js";import"./Button-CasiqzJU.js";import"./useLabels-DJeip4q-.js";import"./useButton-DgzyzFaT.js";import"./useTextField-CXYIEHUd.js";import"./useControlledState-ZH1c28y-.js";import"./useField-Clo25zs2.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-D07Jb6Vk.js";import"./Dialog-ovFgl49I.js";import"./OverlayArrow-B2RREcmi.js";import"./useResizeObserver-BQELvLCX.js";import"./Collection-di033Ejc.js";import"./index-DNb6Ybde.js";import"./Separator-BcBMNXce.js";import"./SelectionManager-AXLlcPMo.js";import"./useEvent-DNIo1dKq.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cycbd7PC.js";import"./useDescription-qt3ADn-9.js";import"./ListKeyboardDelegate-BRRLhSx7.js";import"./PressResponder-B361EnvG.js";import"./useLocalizedStringFormatter-Ce-PtoG-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CvVo2JDq.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BxQZRWoC.js";import"./x-DtvLvZQZ.js";import"./createLucideIcon-DXyy-duf.js";import"./useLocalizedStringFormatter-T78m4mfD.js";import"./Heading-Dphh5hYW.js";import"./info-BrXqDH4v.js";import"./Popover-DzgQSo6r.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BdBhl0EB.js";import"./DragAndDrop-Co0zzF30.js";import"./inertValue-C7dLIAz-.js";import"./useListState-CpgPGzli.js";import"./Tag-BfAwakq7.js";import"./useHighlightSelectionDescription-CNs4qlkd.js";import"./useUpdateEffect-DqPlp9C4.js";import"./useHasTabbableChild-CJGlIotq.js";import"./chevron-down-DbypWpWc.js";import"./Button.module-Co5e5YHp.js";import"./check-DswYKZEQ.js";import"./useToggleState-UwJGjk19.js";import"./Virtualizer-3H8e7jfc.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
