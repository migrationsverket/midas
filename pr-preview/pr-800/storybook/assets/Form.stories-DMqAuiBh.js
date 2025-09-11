import{j as n}from"./iframe-DAHVkxN9.js";import{$ as j}from"./Form-BlCfH1kl.js";import{G}from"./Grid-QbecZtbA.js";import{G as e}from"./GridItem-H2D6hWPN.js";import{T as r}from"./TextField-B0wAP-HV.js";import{S as I}from"./Select-CduMZ-4t.js";import{B as a}from"./Button-DoQQgH6_.js";import{R as g,a as b}from"./Radio-B2gR3Jly.js";import{C as h}from"./CheckboxGroup-CElAWloL.js";import{C as k}from"./Checkbox-hmjAGBto.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-_mCh5Aa-.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-qG-vndN0.js";import"./useFocusRing-DNAMWfZX.js";import"./index-CNjbM-27.js";import"./index-DLn4lQbY.js";import"./TextFieldBase-CFNHY1ii.js";import"./TextField-CgwFqGqS.js";import"./FieldError-D-5TbAUz.js";import"./Text-CWRq4Cba.js";import"./Text-HHKd-p9C.js";import"./ListKeyboardDelegate-CpZXWKjd.js";import"./SelectionManager-Do6SlGF5.js";import"./useEvent-wFy2g5x4.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BAy0Ap_k.js";import"./useDescription-CK_aAikE.js";import"./useControlledState-Dm8pa1XJ.js";import"./Group-D6AMnhCD.js";import"./Input-Dxm-2jrF.js";import"./Hidden-C-_GIKdm.js";import"./Button-D7KCC1zn.js";import"./useLabels-EAVGuxvz.js";import"./useButton-Ccn5B4WT.js";import"./useTextField-BTvLmJwc.js";import"./useField-fBF_JnTK.js";import"./TextField.module-DjUItNl5.js";import"./Label-BnbfmvUQ.js";import"./Dialog-bfmeq6nZ.js";import"./RSPContexts-CqlIYiki.js";import"./OverlayArrow-Cov3RajE.js";import"./useResizeObserver-jp5lVkac.js";import"./Collection-G9vk9EGc.js";import"./index-gpmGtsN_.js";import"./Separator-BtzHGp9e.js";import"./PressResponder-q372aFkw.js";import"./useLocalizedStringFormatter-iMukFwwQ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BcqT8NZQ.js";import"./Dialog-B_tDv1N5.js";import"./useLocalizedStringFormatter-8qzf7cTu.js";import"./x-CYQ8_YQF.js";import"./createLucideIcon-HBlWbCox.js";import"./Heading-BgomQ54p.js";import"./info-CynsP3wK.js";import"./Tag-C0tReEBw.js";import"./ListBox-BajMttiR.js";import"./DragAndDrop-CsMzhIiq.js";import"./inertValue-D2_IVKIU.js";import"./useListState-CzPlee_Q.js";import"./useHighlightSelectionDescription-koj-qIYh.js";import"./useUpdateEffect-76-xvssV.js";import"./useHasTabbableChild-BPm2vewM.js";import"./check-ByukDQiP.js";import"./ListBoxSection-DNwyZhiD.js";import"./Virtualizer-63sswuUx.js";import"./useObserveElement-BxHuVsVt.js";import"./chevron-down-Cw1IesBJ.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-_3mn6-9n.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
