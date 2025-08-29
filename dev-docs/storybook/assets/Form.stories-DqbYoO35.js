import{j as n}from"./iframe-tFm0VM-K.js";import{$ as j}from"./Form-Bo7obgEK.js";import{G}from"./Grid-CFfwu5hf.js";import{G as e}from"./GridItem-DlvqH0On.js";import{T as r}from"./TextField-DkFKDSIW.js";import{S as I}from"./Select-B3-OI5qU.js";import{B as a}from"./Button-BcKba_Ra.js";import{R as g,a as b}from"./Radio-DekIBcm0.js";import{C as h}from"./CheckboxGroup-CS2JX_S_.js";import{C as k}from"./Checkbox-CnQCLKJb.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DY70sTlo.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BZIMR0Fk.js";import"./useFocusRing-Co8vIkJA.js";import"./index-DAusX6h5.js";import"./index-8YvOezI5.js";import"./TextFieldBase-kmGSQqf1.js";import"./TextField-B_Lw6Mm2.js";import"./FieldError-CoT_4oZo.js";import"./Text-BZ94on1H.js";import"./Text-CwXAjEnH.js";import"./Input-BapA8Jmu.js";import"./Hidden-D6Lld1PQ.js";import"./Button-B0epWB0S.js";import"./useLabels-CmEIHHMU.js";import"./useButton-Bu7whPwP.js";import"./useTextField-Dmm9WP5O.js";import"./useControlledState-Bw7VkNuk.js";import"./useField-BzMZExtV.js";import"./TextField.module-BrIGiDQC.js";import"./Label-BUneNsT9.js";import"./Dialog-BV5ejL5D.js";import"./RSPContexts-DV7RSB9w.js";import"./OverlayArrow-BcEB5BbZ.js";import"./useResizeObserver-uPczLp6P.js";import"./Collection-Bxi8MuSS.js";import"./index-CNBhV3B0.js";import"./Separator-D1AhTk1B.js";import"./SelectionManager-CbfCnbpf.js";import"./useEvent-CIYeRngj.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-qPwZayfD.js";import"./useDescription-BGyabHqo.js";import"./ListKeyboardDelegate-dkDtjMUC.js";import"./PressResponder-CIpG3YVo.js";import"./useLocalizedStringFormatter-LA2-Vf3Z.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-0TALIKQ6.js";import"./Dialog-C8XPRFSr.js";import"./useLocalizedStringFormatter-CNpg-Pyv.js";import"./x-2OqQdXSU.js";import"./createLucideIcon-cUJ9SYEq.js";import"./Heading-DVvF-l1T.js";import"./info-Ds39Ga8w.js";import"./Tag-DQssJaBx.js";import"./ListBox-yrs8L2qB.js";import"./DragAndDrop-Civb-mRd.js";import"./inertValue-CNbJugP7.js";import"./useListState-B8DGUgnB.js";import"./useHighlightSelectionDescription-DJ6KqGcf.js";import"./useUpdateEffect-DX4naP5r.js";import"./useHasTabbableChild-WXG55o71.js";import"./check-Dp5DspNF.js";import"./ListBoxSection-jVuRJllz.js";import"./Virtualizer-B1rLMR9h.js";import"./useObserveElement-BdJxfp1V.js";import"./chevron-down-D50n4s62.js";import"./Button.module-CF2bVDCq.js";import"./Group-BmFbbizl.js";import"./useToggleState-BTB0QcH1.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' options={ITEMS.map(i => ({
          id: i,
          name: i
        }))} />
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...(p=(l=m.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,x,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' options={ITEMS.map(i => ({
            name: i,
            id: i
          }))} />
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
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const wn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,wn as __namedExportsOrder,$n as default};
