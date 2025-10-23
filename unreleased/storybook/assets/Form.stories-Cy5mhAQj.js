import{j as n}from"./iframe-0bTpPCGM.js";import{$ as j}from"./Form-lepdQv5F.js";import{G}from"./Grid-CLr2lDuU.js";import{G as e}from"./GridItem-DBXrQxs2.js";import{T as r}from"./TextField-BkXwbrGk.js";import{S as I}from"./Select-ByUxOS4G.js";import{B as a}from"./Button-DmMS8iu3.js";import{R as g,a as b}from"./Radio-o5NTfgGL.js";import{C as h}from"./CheckboxGroup-_lmePWsQ.js";import{C as k}from"./Checkbox-Bl_pLV8r.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-Da2NJRp3.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BCD7yL26.js";import"./useFocusRing-DXDYPE9I.js";import"./index-AGBSBIXB.js";import"./index-9aMKxSS9.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DqEYvBne.js";import"./TextField-DMHlXd6L.js";import"./FieldError-vlg2BLT2.js";import"./Text-Bj_dIOrj.js";import"./Text-CkMVm_nr.js";import"./RSPContexts-DbANyuWC.js";import"./Group-BZf1AxjB.js";import"./Input-BXuBJ19W.js";import"./Hidden-B12c-jHH.js";import"./Button-Bd1Oe3I5.js";import"./useLabels-CHdnNeEI.js";import"./useButton-CajSWL3f.js";import"./useTextField-CqHBE0V3.js";import"./useControlledState-DTAv4OcK.js";import"./useField-To5pyPWJ.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-CCxp9KEq.js";import"./Dialog-CzuOs2j9.js";import"./OverlayArrow-DfIuV-XN.js";import"./useResizeObserver-BKFkpGBA.js";import"./Collection-CMCc6tws.js";import"./index-poxWsy5L.js";import"./Separator-Bi8y4i6c.js";import"./SelectionManager-DXfw7gpo.js";import"./useEvent-BJPfXi3S.js";import"./scrollIntoView-B-lToV_F.js";import"./SelectionIndicator-YIpuCKJ-.js";import"./useDescription-Crl658Pc.js";import"./ListKeyboardDelegate-X3iduYCb.js";import"./PressResponder-DkizAOcH.js";import"./useLocalizedStringFormatter-DjmlPkcX.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-S4oXaH1q.js";import"./VisuallyHidden-CBE7LsRS.js";import"./useLocalizedStringFormatter-Dntahd0y.js";import"./x-CX3yvpLv.js";import"./createLucideIcon-BTHHFIdb.js";import"./Heading-C4c5MkVj.js";import"./info-Dy37mKmp.js";import"./Popover-DSPcW9K-.js";import"./Tag-HmkKCYEw.js";import"./ListBox-UA94tVJl.js";import"./DragAndDrop-B5SEmos-.js";import"./inertValue-CpazA7Xm.js";import"./useListState-CCyHbFf5.js";import"./useHighlightSelectionDescription-C8dYU7eG.js";import"./useUpdateEffect-B2aEHTo9.js";import"./useHasTabbableChild-wep6hjRn.js";import"./check-DjYvyAWa.js";import"./ListBoxSection-wZRHl_dB.js";import"./Virtualizer-XZn34rOb.js";import"./chevron-down-tMw9_4G9.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-DYSIcDfB.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
